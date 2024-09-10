# Roblox Game Joiner
Allows you to launch Roblox with custom parameters from a website

# Roblox launch parameters
## Game parameters
`placeid` - Launches Roblox game with place id<br />
`gameInstanceId` - Joins server by JobId<br />
`linkCode` - Joins server by private server invite code<br />
`launchData` - Launches Roblox game with [launch data](https://devforum.roblox.com/t/developer-deeplinking-beta/1904069)<br />
`accessCode` - Joins server by access code *Kicks after launch*<br />
`reservedServerAccessCode` - Launches game with reserved server access code *Kicks after launch*<br />
`userID` - Follows user into game<br />
`callId` - Join game by [call id](https://www.roblox.com/games/15308759682/Roblox-Connect)<br />
## Tracking parameters
`joinAttemptOrigin` - Origin of join<br />
`launchtime` - Local unix time<br />
`joinAttemptId` - Unique id of join attempt<br />
## Examples
`https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818` - Joins crossroads<br />
`https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818&gameInstanceId=6a62d499-b69c-4300-ac3f-ad2f395f4097` - Joins crossroads server with job id 6a62d499-b69c-4300-ac3f-ad2f395f4097<br />
`https://returnrqt.github.io/RobloxGameJoiner/?userID=1` - Follows user id 1 into game<br />
`https://returnrqt.github.io/RobloxGameJoiner/?callId=123` - Joins Roblox call id 123<br />
