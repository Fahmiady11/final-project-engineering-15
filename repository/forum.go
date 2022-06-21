package repository

import (
	"kel15/models"
	"time"

	"github.com/gin-gonic/gin"
)

func (repository *Repository) GetAllForum(c *gin.Context) ([]models.Forum, error) {
	var forums []models.Forum

	query := `SELECT Forums.ID, Forums.Title, Forums.Content, Forums.user_id, Forums.created_at, Forums.updated_at FROM Forums`

	rows, err := repository.db.Query(query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var forum models.Forum
		err := rows.Scan(&forum.ID, &forum.Title, &forum.Content, &forum.User.ID, &forum.CreatedAt, &forum.UpdatedAt)
		if err != nil {
			return nil, err
		}

		user, err := repository.GetUserById(c, int64(forum.User.ID))
		if err != nil {
			return nil, err
		}

		forum.User = *user
		forums = append(forums, forum)
	}

	return forums, nil
}

func (repository *Repository) CreateForum(c *gin.Context, title, contents string, user_id int) (*models.Forum, error) {
	query := `INSERT INTO Forums (title, content, user_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`

	result, err := repository.db.Exec(query, title, contents, user_id, time.Now(), time.Now())

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

	return &models.Forum{
		ID:        int(id),
		User:      *user,
		Title:     title,
		Content:   contents,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}, nil
}

func (repository *Repository) UpdateForum(c *gin.Context, id int, title, contents string) (*models.Forum, error) {
	query := `UPDATE Forums SET title = ?, content = ?, updated_at = ? WHERE id = ?`

	_, err := repository.db.Exec(query, title, contents, time.Now(), id)

	if err != nil {
		return nil, err
	}

	user, err := repository.GetUserById(c, int64(id))
	if err != nil {
		return nil, err
	}

	return &models.Forum{
		ID:        id,
		User:      *user,
		Title:     title,
		Content:   contents,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}, nil
}

func (repository *Repository) DeleteForum(c *gin.Context, id int) error {
	query := `DELETE FROM Forums WHERE id = ?`

	_, err := repository.db.Exec(query, id)

	if err != nil {
		return err
	}

	return nil
}
