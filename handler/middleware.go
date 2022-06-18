package handler

import (
	"errors"
	"fmt"
	"kel15/models"
	"strings"

	"github.com/gin-gonic/gin"
)

func (handler *Handler) GetToken(c *gin.Context) (*string, error) {
	headers := c.Request.Header["Authorization"]
	splitToken := strings.Split(headers[0], " ")

	if len(splitToken) != 2 {
		return nil, errors.New("Invalid token")
	}

	token := splitToken[1]

	return &token, nil
}

func (handler *Handler) GetUserByToken(c *gin.Context) (*models.User, error) {
	tokenString, err := handler.Project.Usecase.GetToken(c)
	fmt.Println(*tokenString, err, "Token")
	if err != nil {
		return nil, err
	}
	user, err := handler.Project.Usecase.GetUserByToken(c, *tokenString)

	fmt.Println(user, err, "User")
	if err != nil {
		return nil, err
	}
	return user, nil

}

func (handler *Handler) CheckAdminRole(c *gin.Context) {

	user, err := handler.GetUserByToken(c)
	if err != nil {
		c.JSON(401, gin.H{
			"message": "Unauthorized",
			"code":    401,
			"success": false,
		})
		c.Abort()
		return
	}

	if user.Role != "admin" {
		c.JSON(401, gin.H{
			"message": "You don't have permission to access this resource",
			"code":    401,
			"success": false,
		})
		c.Abort()
		return
	}

	c.Set("user", user)
	c.Next()
	return

}

func (handler *Handler) CheckUserRole(c *gin.Context) {
	user, err := handler.GetUserByToken(c)
	if err != nil {
		c.JSON(401, gin.H{
			"message": "Unauthorized",
			"code":    401,
			"success": false,
		})
		c.Abort()
		return
	}
	c.Set("user", user)
	c.Next()
	return
}

func (handler *Handler) TestingMiddlewareAdmin(c *gin.Context) {
	user, _ := c.Get("user")
	c.JSON(200, gin.H{
		"message": "You are admin",
		"code":    200,
		"success": true,
		"data":    user,
	})
	return
}
func (handler *Handler) TestingMiddlewareUser(c *gin.Context) {
	user, _ := c.Get("user")
	c.JSON(200, gin.H{
		"message": "You are User",
		"code":    200,
		"success": true,
		"data":    user,
	})
	return
}
