const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;

// Helper function to parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
}

// Helper function to generate ticket ID
function generateTicketID() {
  return 'TKT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Create server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Set CORS headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Handle /complain route
  if (pathname === '/complain' && req.method === 'POST') {
    try {
      const data = await parseBody(req);
      const { name, issue, priority } = data;

      // Validate input
      if (!name || !issue || !priority) {
        res.writeHead(400);
        res.end(JSON.stringify({
          error: 'Missing required fields: name, issue, priority'
        }));
        return;
      }

      // Generate ticket ID
      const ticketID = generateTicketID();

      // Create complaint record
      const complaint = `
----------------------------------------
Ticket ID: ${ticketID}
Name: ${name}
Issue: ${issue}
Priority: ${priority}
Date: ${new Date().toISOString()}
----------------------------------------
`;

      // Determine which file to write to based on priority
      const filename = priority.toLowerCase() === 'high' ? 'URGENT.txt' : 'normal_complaints.txt';

      // Append to file
      fs.appendFile(filename, complaint, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          res.writeHead(500);
          res.end(JSON.stringify({
            error: 'Failed to save complaint'
          }));
          return;
        }

        // Send success response
        res.writeHead(200);
        res.end(JSON.stringify({
          ticketID: ticketID,
          message: 'We will solve your issue soon.'
        }));
      });

    } catch (error) {
      res.writeHead(400);
      res.end(JSON.stringify({
        error: 'Invalid JSON data'
      }));
    }
  } else {
    // Handle unknown routes
    res.writeHead(404);
    res.end(JSON.stringify({
      error: 'Route not found. Use POST /complain'
    }));
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Support Ticket Server running on http://localhost:${PORT}`);
  console.log('Send POST requests to http://localhost:${PORT}/complain');
  console.log('\nExample using curl:');
  console.log(`curl -X POST http://localhost:${PORT}/complain \\
  -H "Content-Type: application/json" \\
  -d '{"name":"John Doe","issue":"App crashes on startup","priority":"high"}'`);
});