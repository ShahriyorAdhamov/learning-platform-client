import { Box, Container, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Verification } from "src/components";
import Login from "src/components/login/login";
import Register from "src/components/register/register";
import SocialMedia from "src/components/sotial-media/sotial-media";

const AuthPageComponent = () => {
	const [state, setState] = useState<'login' | 'register' | 'verification'>('login');

	const onNavigateStateComponent = (component: 'login' | 'register' | 'verification') => setState(component);

	const renderStateComponent = () => {
		switch (state) {
			case 'login':
				return <Login onNavigateStateComponent={onNavigateStateComponent} />;
			case 'register':
				return <Register onNavigateStateComponent={onNavigateStateComponent} />;
			case 'verification':
				return <Verification />;
		}
	};

	return (
		<>
			<Box pos={'relative'}>
				<Container
					as={SimpleGrid}
					maxW={'7xl'}
					py={{ base: 10, sm: 20 }}
					justifyContent={'center'}
				>
					<Stack
						bg={useColorModeValue('gray.50', 'gray.900')}
						rounded={'xl'}
						p={{ base: 4, sm: 6, md: 8 }}
						spacing={{ base: 8 }}
						maxW={{ lg: 'lg' }}
					>
						{renderStateComponent()}
						<SocialMedia />
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default AuthPageComponent;