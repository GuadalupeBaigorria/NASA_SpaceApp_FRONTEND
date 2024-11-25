import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { TypographyInheritContext } from '@mui/joy/Typography/Typography';
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' ,fontFamily:'inherit'}}
      
    >
      <Option value="system" sx={{fontFamily:'inherit'}}>System</Option>
      <Option value="light"sx={{fontFamily:'inherit'}}>Light</Option>
      <Option value="dark" sx={{fontFamily:'inherit'}}>Dark</Option>
    </Select>
  );
}

export default function Login() {
  return (
    <main>
        <CssVarsProvider>
      <ModeToggle />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          fontFamily:"inherit"
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" sx={{fontFamily:'inherit'}}>
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm" sx={{fontFamily:'inherit'}}>Sign in to continue.</Typography>
        </div>
        <FormControl sx={{fontFamily:'inherit'}}>
          <FormLabel sx={{fontFamily:'inherit'}}>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            sx={{fontFamily:'inherit'}}
          />
        </FormControl>
        <FormControl sx={{fontFamily:'inherit'}}>
          <FormLabel sx={{fontFamily:'inherit'}}>Password</FormLabel>
          <Input
            // html input attribute
            sx={{fontFamily:'inherit'}}
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ ,fontFamily:'inherit'}}><Link href="/about-us">Log in</Link></Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center',fontFamily:'inherit' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
      </CssVarsProvider>
    </main>
  );
}
