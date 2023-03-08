import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact eLement={<Feed />} />
                <Route path="/video/:id" eLement={<VideoDetail />} />
                <Route path="/channel/:id" eLement={<ChannelDetail />} />
                <Route path="/search/:searchTerm" eLement={<SearchFeed />} />           
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App;