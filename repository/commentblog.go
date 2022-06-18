package repository

import (
	"kel15/models"
	"time"

	"github.com/gin-gonic/gin"
)

func (repository *Repository) CreateCommentBlog(c *gin.Context, comment string, blog_id, user_id int) (*models.CommentBlog, error) {
	
	query := `INSERT INTO CommentBlog (comment, blog_id, user_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?);`

	result, err := repository.db.Exec(query, comment, blog_id, user_id, time.Now(), time.Now())
	if err != nil {
		return nil, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}

	user, err := repository.GetUserById(c, int64(user_id))
	if err != nil {
		return nil, err
	}

	return &models.CommentBlog{
		ID:        int(id),
		Comment:   comment,
		User: 	*user,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}, nil
}

func (repository *Repository) GetAllCommentByBlogID(c *gin.Context, id int) ([]models.CommentBlog, error) {
	// var comments []models.CommentBlog

	query := `SELECT Comments.id, Comments.comment, Comments.created_at, Comments.updated_at,
			 Users.id, Users.username, Users.email, Users.role, Users.created_at, Users.updated_at
		 	 FROM CommentBlog as Comments 
			 JOIN Users ON Comments.user_id = Users.id 
			 WHERE Comments.blog_id = ?;`

	rows, err := repository.db.Query(query, c.Param("id"))
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var comment models.CommentBlog
	var comments []models.CommentBlog
	var User models.User
	
	for rows.Next() {
		
		err := rows.Scan(&comment.ID, &comment.Comment, &comment.CreatedAt, &comment.UpdatedAt,
			&User.ID, &User.Username, &User.Email, &User.Role, &User.CreatedAt, &User.UpdatedAt)

		if err != nil {
			return nil, err
		}
		comment.User = User
		comments = append(comments, comment)
	}

	return comments, nil
}