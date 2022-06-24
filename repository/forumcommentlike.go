package repository

import (
	"database/sql"
	"errors"
	"kel15/models"
	"time"

	"github.com/gin-gonic/gin"
)

func (repository *Repository) GetAllLikeByForumCommentID(c *gin.Context, id int) (*[]models.ForumCommentLikesResponse, error) {
	var forumCommentLikes = make([]models.ForumCommentLikesResponse, 0)

	query := `
        SELECT 
            ForumCommentLikes.id, ForumCommentLikes.forum_comment_id, ForumCommentLikes.created_at, ForumCommentLikes.updated_at,
            Users.id, Users.username, Users.email
        FROM ForumCommentLikes 
        JOIN Users ON ForumCommentLikes.user_id = Users.id
        WHERE ForumCommentLikes.forum_comment_id = ?
        ORDER BY ForumCommentLikes.created_at DESC
    `
	rows, err := repository.db.Query(query, id)

	if err != nil && err != sql.ErrNoRows {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var forumCommentLike models.ForumCommentLikesResponse
		var user models.User

		err := rows.Scan(&forumCommentLike.ID, &forumCommentLike.ForumCommentID, &forumCommentLike.CreatedAt, &forumCommentLike.UpdatedAt, &user.ID, &user.Username, &user.Email)
		if err != nil {
			return nil, err
		}

		forumCommentLike.User = user

		forumCommentLikes = append(forumCommentLikes, forumCommentLike)
	}

	return &forumCommentLikes, nil
}

func (repository *Repository) GetLikeByUserIDAndForumCommentID(c *gin.Context, user_id, forum_comment_id int) (*models.ForumCommentLikesResponse, error) {
	var forumCommentLike models.ForumCommentLikesResponse

	query := `
        SELECT 
            ForumCommentLikes.id, ForumCommentLikes.forum_comment_id, ForumCommentLikes.created_at, ForumCommentLikes.updated_at,
            Users.id, Users.username, Users.email
        FROM ForumCommentLikes 
        JOIN Users ON ForumCommentLikes.user_id = Users.id
        WHERE user_id = ? AND forum_comment_id = ?
    `
	row := repository.db.QueryRow(query, user_id, forum_comment_id)
	err := row.Scan(&forumCommentLike.ID, &forumCommentLike.ForumCommentID, &forumCommentLike.CreatedAt, &forumCommentLike.UpdatedAt, &forumCommentLike.User.ID, &forumCommentLike.User.Username, &forumCommentLike.User.Email)

	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	return &forumCommentLike, nil
}

func (repository *Repository) CreateLikeByForumCommentId(c *gin.Context, user_id, forum_comment_id int) (*models.ForumCommentLikesResponse, error) {
	_, err := repository.GetCommentById(c, forum_comment_id)
	if err == sql.ErrNoRows {
		return nil, errors.New("Comment not found")
	}

	forumCommentLike, err := repository.GetLikeByUserIDAndForumCommentID(c, user_id, forum_comment_id)

	if err == nil && forumCommentLike != nil {
		return forumCommentLike, nil
	}

	query := `
        INSERT INTO ForumCommentLikes (user_id, forum_comment_id, created_at, updated_at)
        VALUES (?, ?, ?, ?)
    `
	result, err := repository.db.Exec(query, user_id, forum_comment_id, time.Now(), time.Now())
	if err != nil {
		return nil, err
	}
	id, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}
	forumCommentLike = &models.ForumCommentLikesResponse{
		ID:             int(id),
		ForumCommentID: forum_comment_id,
		User: models.User{
			ID: user_id,
		},
	}
	return forumCommentLike, nil
}

func (repository *Repository) DeleteLikeByForumCommentId(c *gin.Context, user_id, forum_comment_id int) (*models.ForumCommentLikesResponse, error) {
	forumCommentLike, err := repository.GetLikeByUserIDAndForumCommentID(c, user_id, forum_comment_id)

	if err == nil && forumCommentLike == nil {
		return nil, errors.New("Like not found")
	}

	if err != nil {
		return nil, err
	}

	query := `
        DELETE FROM ForumCommentLikes WHERE id = ?
    `
	_, err = repository.db.Exec(query, forumCommentLike.ID)
	if err != nil {
		return nil, err
	}

	return forumCommentLike, nil
}
