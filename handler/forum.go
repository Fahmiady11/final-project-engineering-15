package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (forumHandler *Handler) GetAllForum(c *gin.Context) {
	data, err := forumHandler.Project.Usecase.GetAllForum(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, sendResponseError{Success: false, Code: 400, Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, sendResponseSuccess{Success: true, Code: 200, Data: data})
	return
}

func (forumHandler *Handler) CreateForum(c *gin.Context) {
	data, err := forumHandler.Project.Usecase.CreateForum(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, sendResponseError{Success: false, Code: 400, Message: err.Error()})
		return
	}

	c.JSON(http.StatusCreated, sendResponseSuccess{Success: true, Code: 201, Data: data})
	return
}

func (forumHandler *Handler) UpdateForum(c *gin.Context) {
	data, err := forumHandler.Project.Usecase.UpdateForum(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, sendResponseError{Success: false, Code: 400, Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, sendResponseSuccess{Success: true, Code: 200, Data: data})
	return
}

func (forumHandler *Handler) DeleteForum(c *gin.Context) {
	err := forumHandler.Project.Usecase.DeleteForum(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, sendResponseError{Success: false, Code: 400, Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, sendResponseSuccess{Success: true, Code: 200, Data: nil})
	return
}

func (forumHandler *Handler) GetForum(c *gin.Context) {
	data, err := forumHandler.Project.Usecase.GetForum(c)

	if err != nil {
		c.JSON(http.StatusBadRequest, sendResponseError{Success: false, Code: 400, Message: err.Error()})
		return
	}

	c.JSON(http.StatusOK, sendResponseSuccess{Success: true, Code: 200, Data: data})
	return
}