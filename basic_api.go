package main

import (
	"fmt"
	"log"
	"net/http"
	"project/database"
	"project/ioFormatting"
	"project/validations"
	"strings"

	"github.com/gin-gonic/gin"
)

func postLogs(c *gin.Context) {
	var newLog ioFormatting.InputLog
	var responseLog ioFormatting.LogIdentifierResponseFormat
	var responseIdentifier ioFormatting.LogIdentifierResponse
	code := http.StatusOK

	if err := c.BindJSON(&newLog); err != nil {
		log.Println("Error in Post Request, Error is:", err)
		c.IndentedJSON(http.StatusBadRequest, newLog)
		return
	}
	if !validations.IsInutLogValid(newLog) {
		code = http.StatusNotAcceptable
		responseLog.Status = "NOT OK"
		responseLog.IsError = "False"
		responseIdentifier.LogIdentifier = ""
		responseLog.Message = "Invalid Parameters Passed into JSON Object."
	} else {

		returnIdentity := database.InsertIntoQuery(newLog)

		if strings.HasPrefix(returnIdentity, "ERROR") {
			code = http.StatusInternalServerError
			responseLog.Status = "NOT OK"
			responseLog.IsError = "True"
			responseIdentifier.LogIdentifier = ""
			responseLog.Message = returnIdentity
		} else {
			code = http.StatusAccepted
			responseLog.Status = "OK"
			responseLog.IsError = "False"
			responseIdentifier.LogIdentifier = returnIdentity
			responseLog.Message = "Inserted Properly!"
		}
	}
	responseLog.Response = responseIdentifier
	c.BindJSON(&responseLog)
	c.IndentedJSON(code, responseLog)
}

func getLogsById(c *gin.Context) {
	code := http.StatusOK
	var responseLog ioFormatting.UserHistoryResponseFormat

	requestedUserId := c.Param("userId")

	fmt.Printf("%v %T", requestedUserId, requestedUserId)
	returnlogs, message := database.GetUserHistory(requestedUserId)
	if strings.HasPrefix(message, "ERROR") {
		code = http.StatusInternalServerError
		responseLog.Status = "NOT OK"
		responseLog.IsError = "True"
		responseLog.Response = returnlogs
		responseLog.Message = message
	} else {
		code = http.StatusOK
		responseLog.Status = "OK"
		responseLog.IsError = "False"
		responseLog.Response = returnlogs
		responseLog.Message = message
	}

	c.IndentedJSON(code, responseLog)
}

func main() {
	router := gin.Default()

	// router.GET("history-session/api/v1/user-history/", getLogs)
	router.GET("history-service/api/v1/user-history/:userId", getLogsById)

	router.POST("history-service/api/v1/logs/", postLogs)
	// router.POST("history-session/api/v1/logs/:logId)

	router.Run("localhost:8080")
}
