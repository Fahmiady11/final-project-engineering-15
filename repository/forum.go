package repository

import (
	"kel15/models"

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
