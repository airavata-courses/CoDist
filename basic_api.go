package main

import (
	"fmt"
	"log"
	"net/http"
	"project/database"
	"project/ioFormatting"

	"github.com/gin-gonic/gin"
)

func postLogs(c *gin.Context) {
	var newLog ioFormatting.InputLog

	if err := c.BindJSON(&newLog); err != nil {
		log.Println("Error in Post Request, Error is:", err)
		c.IndentedJSON(http.StatusBadRequest, newLog)
		return
	}

	if newLog.UserId == "" {
		log.Println("No User ID Provided", newLog)
		c.IndentedJSON(http.StatusNotAcceptable, "No User ID Provided")
		return
	}

	database.InsertIntoQuery(newLog)
	c.IndentedJSON(http.StatusAccepted, "success")
}

func getLogsById(c *gin.Context) {
	requestedUserId := c.Param("userId")

	fmt.Printf("%v %T", requestedUserId, requestedUserId)
	returnlogs := database.GetUserHistory(requestedUserId)

	c.IndentedJSON(http.StatusOK, returnlogs)
}

func main() {
	router := gin.Default()

	// router.GET("history-session/api/v1/user-history/", getLogs)
	router.GET("history-session/api/v1/user-history/:userId", getLogsById)

	router.POST("history-session/api/v1/logs/", postLogs)
	// router.POST("history-session/api/v1/logs/:logId)

	router.Run("localhost:8080")
}
