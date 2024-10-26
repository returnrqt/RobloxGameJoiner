# Roblox Game Joiner

This tool allows you to launch Roblox with custom parameters directly from a website.

## Roblox Launch Parameters

### Game Parameters
- **`placeid`**: Launches a Roblox game using its place ID.
- **`gameInstanceId`**: Joins a server using its Job ID.
- **`linkCode`**: Joins a server using a private server invite code.
- **`launchData`**: Launches a Roblox game with [launch data](https://devforum.roblox.com/t/developer-deeplinking-beta/1904069).
- **`accessCode`**: Joins a server using an access code (this disconnects the player).
- **`reservedServerAccessCode`**: Launches a game using a reserved server access code (this disconnects the player).
- **`userID`**: Follows a specific user into a game.
- **`callId`**: Joins a game using a [call ID](https://devforum.roblox.com/t/the-future-of-immersive-communication-on-roblox/2701137).
- **`id`**: ?
- **`eventId`**: ? - Might be related to The Haunt

### Tracking Parameters
- **`joinAttemptOrigin`**: Indicates the [origin of the join](https://gist.github.com/returnrqt/c524cd4f93062ee90df8c5b2604133d4) attempt.
- **`launchtime`**: The local Unix timestamp at the time of launch.
- **`joinAttemptId`**: A unique UUID identifying the join attempt.

## Example URLs
- **Join Crossroads**:  
  `https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818`
  
- **Join Crossroads Server with Job ID**:  
  `https://returnrqt.github.io/RobloxGameJoiner/?placeid=1818&gameInstanceId=6a62d499-b69c-4300-ac3f-ad2f395f4097`
  
- **Follow User ID 1**:  
  `https://returnrqt.github.io/RobloxGameJoiner/?userID=1`
  
- **Join Roblox Call ID 123**:  
  `https://returnrqt.github.io/RobloxGameJoiner/?callId=123`
