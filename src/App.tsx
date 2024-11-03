import { Button, Card, mono, sans, Stack } from "@lib/index";
import { useState } from "react";




function App() {

  const [theme, setTheme] = useState(sans);

  return (
    <div className={theme}>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value={sans}>Sans</option>
        <option value={mono}>Mono</option>
      </select>
      <Stack gap="normal">
        <Button onPress={() => {
          alert("Hello world")
        }} label="Primary" intent="primary" />
        <Button label="Secondary" intent="secondary" />
      </Stack>
      <Card>
        <h1>Card</h1>
        <p>Card content</p>
        <Button label="Tap me" intent='primary' />
      </Card>
    </div>
  )
}

export default App
