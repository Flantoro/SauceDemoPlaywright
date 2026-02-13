# Miro MCP Setup Guide

## Current Configuration

Your `.cursor/mcp.json` is configured with:
```json
{
  "mcpServers": {
    "miro-mcp": {
      "url": "https://mcp.miro.com/",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## Steps to Verify MCP Connection

### 1. Verify MCP Server Status in Cursor

1. **Open Cursor Settings**:
   - Press `Ctrl+,` (Windows) or `Cmd+,` (Mac)
   - Or go to `File` → `Preferences` → `Settings`

2. **Navigate to MCP Settings**:
   - Search for "MCP" in settings
   - Or go to `Features` → `MCP` section

3. **Check Miro MCP Status**:
   - Look for "miro-mcp" in the list of MCP servers
   - Verify it shows as "Connected" (not "Disconnected" or "Error")
   - Check if there's an OAuth connection status

### 2. Re-authenticate if Needed

If the connection shows as disconnected:

1. **Click "Connect" or "Reconnect"** next to miro-mcp
2. **Complete OAuth Flow**:
   - You'll be redirected to Miro's authorization page
   - Select your Miro team (MCP Server is team-specific)
   - Authorize the connection
   - You'll be redirected back to Cursor

### 3. Check Available Tools

After connection, Miro MCP should provide tools like:
- `get_board` or `fetch_board` - to retrieve board content
- `list_boards` - to list available boards
- `get_board_items` - to get items from a board
- `create_diagram` - to create diagrams from code/text

**Note**: Tool names may vary. Check Cursor's MCP tools panel to see what's actually available.

### 4. Enterprise Plan Users

If you're on **Miro Enterprise Plan**:
- **Admin must enable MCP Server first** in the admin panel
- See: https://help.miro.com/hc/en-us/articles/31625761037202-Miro-MCP-Server-admin-guide

## Troubleshooting

### Issue: "Server not found" or "Tool not found"

**Solutions**:
1. **Restart Cursor** completely (close and reopen)
2. **Verify OAuth connection** in Cursor MCP settings
3. **Check MCP logs** in Cursor (if available in settings)
4. **Try re-adding the MCP server**:
   - Remove from `.cursor/mcp.json`
   - Restart Cursor
   - Add it back via Cursor Settings UI (preferred) or manually

### Issue: Can't see Miro tools

**Solutions**:
1. Ensure MCP is enabled in Cursor settings
2. Check that OAuth completed successfully
3. Verify you selected the correct Miro team during OAuth
4. Try disconnecting and reconnecting

### Alternative: Manual Board Access

If MCP tools aren't working, you can:
1. **Export board as image** and describe it
2. **Copy board content** (text, shapes) and paste it
3. **Share board ID** from URL: `https://miro.com/app/board/[BOARD_ID]/`
4. **Use Miro API directly** (requires API token setup)

## Testing the Connection

Once connected, try asking:
- "List my Miro boards"
- "Get board content for board ID: uXjVL2wx-zo="
- "Analyze the WBAP scheme diagram from Miro board uXjVL2wx-zo="

If tools are available, I should be able to access them automatically.

## Current Limitations

According to Miro's documentation, the **beta MCP Server** currently focuses on:
1. **Generating diagrams** FROM code/text/PRDs
2. **Generating code** FROM Miro board content

**Reading/analyzing existing boards** may have limited tool support in beta. If direct board reading isn't available, we can:
- Use the board ID you provide
- Work with exported content
- Generate test checklists based on your description
