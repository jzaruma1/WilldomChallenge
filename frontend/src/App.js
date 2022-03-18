import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './components/shared/Heading';
import LocalPostForm from './components/local-post/LocalPostForm';
import LocalPostList from './components/local-post/LocalPostList';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { LocalPostContextProvider } from "./context/local-post/LocalPostContext";
import RemoteState from "./context/remote-post/RemoteState";
import RemotePostList from './components/remote-post/RemotePostList';
import RemotePlusPostList from './components/remote-post/RemotePlusPostList';

function App() {
  return (
    <div>
      <div className='h-screen p-10'>
        <div className='container mx-auto h-full'>
          <LocalPostContextProvider>
            <Heading />
            <RemoteState>
              <Routes>
                <Route path="/" element={<LocalPostList />} />
                <Route path="/remote" element={<RemotePostList />} />
                <Route path="/remote-plus" element={<RemotePlusPostList />} />
                <Route path="add" element={<LocalPostForm />} />
                <Route path="edit/:id" element={<LocalPostForm />} />
              </Routes>
            </RemoteState>
          </LocalPostContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
