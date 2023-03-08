import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard, Loader} from './';

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
        {videos.map((items, idx) =>( 
        <Box key={idx}>
            {items.id.videoId && <VideoCard video={items} />}
            {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>))}

    </Stack>
  );
}

export default Videos;