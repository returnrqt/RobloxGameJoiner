# Roblox Game Joiner
Allows you to launch Roblox with custom arguments from website

# Roblox launch arguments
## Game arguments
`placeid` - Launches Roblox game with place id\n
`gameInstanceId` - Joins server by JobId\n
`linkCode` - Joins server by private server invite code\n
`launchData` - Launches Roblox with game join data\n
`accessCode` - Joins server by access code *Kicks after launch*\n
`reservedServerAccessCode` - Launches game with reserved server access code *Kicks after launch*\n
`userID` - Follows user into game\n
`callId` - Id of Roblox call\n
## Tracking data
`joinAttemptOrigin` - Origin of join\n
`launchtime` - Local unix time\n
`joinAttemptId` - Unique id of join attempt\n
## Examples
`https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818` - Joins crossroads\n
`https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818&gameInstanceId=6a62d499-b69c-4300-ac3f-ad2f395f4097` - Joins crossroads server with job id 6a62d499-b69c-4300-ac3f-ad2f395f4097\n
`https://returnrqt.github.io/RobloxGameJoiner/?userID=1` - Follows user into game id 1\n
`https://returnrqt.github.io/RobloxGameJoiner/?callId=123` - Joins Roblox call id 123\n
