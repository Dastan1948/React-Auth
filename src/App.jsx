import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import SignUp from './components/SignUp'
import './App.css'

function App() {
	console.log(process.env);
	return (
		<Container>
			<Row>
				<Col>
					<Routes>
						<Route
							path='/home'
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path='/' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
					</Routes>
				</Col>
			</Row>
		</Container>
	)
}

export default App
