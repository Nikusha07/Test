import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoApp from './pages/Todo';
import styled from 'styled-components';
import ProductCard from "./pages/Fetch";


export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Nav>
          <Link to="Todo">Todo</Link>
          <Link to="feat">feat</Link>
        </Nav>
      </header>
      <Routes>
        <Route path="Todo" element={<TodoApp />} />
        <Route path="feat" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #b9b9b9;
  font-size: 30px;
`;
