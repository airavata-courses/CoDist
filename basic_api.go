package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type log struct {
	ID      string `json: "id"`
	UserId  string `json: "userId"`
	Message string `json: "message"`
	Service string `json: "service"`
}

var logs = []log{
	{ID: "1", UserId: "1", Message: "User is Authorized", Service: "registry-service"},
	{ID: "2", UserId: "3", Message: "Completed Graph for data", Service: "plotting-service"},
	{ID: "3", UserId: "5", Message: "Requested Plot for date and time", Service: "api-gateway"},
}

func getLogs(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, logs)
}

func postLogs(c *gin.Context) {
	var newLog log

	if err := c.BindJSON(&newLog); err != nil {
		fmt.Println("Error in Post Request", err)
		c.IndentedJSON(http.StatusBadRequest, newLog)
		return
	}

	logs = append(logs, newLog)
	c.IndentedJSON(http.StatusCreated, newLog)
}
func getLogsById(c *gin.Context) {
	userId := c.Param("userId")

	for _, a := range logs {
		if a.UserId == userId {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "logs for this user doesnt exists"})
}

func main() {
	router := gin.Default()

	router.GET("history-session/api/v1/user-history/", getLogs)
	router.GET("history-session/api/v1/user-history/:userId", getLogsById)

	router.POST("history-session/api/v1/logs/", postLogs)

	router.Run("localhost:8080")
}
