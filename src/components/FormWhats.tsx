import { useState, type FormEvent, type ChangeEvent } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import '../styles/formWhats.css';

export default function WhatsAppForm() {
  const [discord, setDiscord] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [playerType, setPlayerType] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalMessage =
      `Hello! I'd like to join the team.\n\n` +
      `Discord: ${discord}\n` +
      `In-game Nickname: ${nickname}\n` +
      `Player Type: ${playerType}\n` +
      `Reason: ${message}`;

    const whatsappNumber = '5511999999999';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

    window.open(url, '_blank');
  };

  return (
    <Box
    className='form-whats'
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '33%',
      }}
    >
      <Typography variant="h5" textAlign="center">
        Join us!
      </Typography>

      <TextField
      className='teste'
        label="Discord Nickname"
        placeholder="Ex.: User#1234"
        value={discord}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDiscord(e.target.value)}
        required
        fullWidth
      />

      <TextField
        label="In-game Nickname"
        placeholder="Ex.: User"
        value={nickname}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
        required
        fullWidth
      />

      <TextField
        select
        label="Player Type"
        value={playerType}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPlayerType(e.target.value)}
        required
        fullWidth
      >
        <MenuItem value="shiny_hunter">Shiny Hunter</MenuItem>
        <MenuItem value="pvp_player">PvP Player</MenuItem>
        <MenuItem value="both">Both</MenuItem>
      </TextField>

      <TextField
        label="Why do you want to join the team?"
        value={message}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        required
        multiline
        rows={4}
        fullWidth
      />

      <Button variant="contained" type="submit" fullWidth>
        Send to WhatsApp
      </Button>
    </Box>
  );
}
