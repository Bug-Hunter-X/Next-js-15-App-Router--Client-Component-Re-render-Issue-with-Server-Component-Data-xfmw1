```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Server Component:</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <ClientComponent data={data} />
    </div>
  );
}

function ClientComponent({ data }) {
  return (
    <div>
      <h2>Client Component</h2>
      {data && <p>Data received from server component:{data.message}</p>}
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  const currentTime = new Date();
  res.status(200).json({ message: `The time is ${currentTime}` });
}
```