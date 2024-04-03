import * as fs from "fs"
import { config } from "process"
import { WebhookClient} from "discord.js"

// Define the file path
const filePath: string = "report.json"
const webhookClient = new WebhookClient({
  id: "1212258345126334485",
  token: "5RrE3uRt3ZtQjXU2rg-VsB0jmNkRiQIgGwISAAd-wyD2YAXLy0LUFCK0omEC1xz6GgoR"
})
//https://discord.com/api/webhooks/1212258345126334485/5RrE3uRt3ZtQjXU2rg-VsB0jmNkRiQIgGwISAAd-wyD2YAXLy0LUFCK0omEC1xz6GgoR

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err)
    return
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data)
    console.log("JSON data:", jsonData)

    var passedScenario = jsonData.stats.expected
    var failedScenario = jsonData.stats.unexpected
    var totalScenario = passedScenario + failedScenario
    var successRate = (passedScenario / totalScenario) * 100

    console.log("configFile", jsonData.config.configFile)
    console.log(passedScenario)
    console.log(failedScenario)
    console.log(totalScenario)
    console.log(successRate)


    webhookClient.send("Sleeper on discord webhook!\nTotal Scenario: " + totalScenario + "\nSuccess Rate: " + successRate + "%")
      .then(() => console.log("Tis message from TS code!"))
      .catch(console.error)
    
  } catch (error) {
    console.error("Error parsing JSON:", error)
  }
})