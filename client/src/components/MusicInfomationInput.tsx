import React, { useState } from 'react'

interface MusicInfomation{
    title: string,
    album: string,
    artist: string,
}

const MusicInfomationInput = () => {
    const [title, setTitle] =useState<string>('')
    const [album, setAlbum] =useState<string>('')
    const [artist, setArtist] =useState<string>('')

    const [musicInfomation, setMusicInfomation] = useState<MusicInfomation>()
  return (

    <div className='input-form'>
        <label>Title:</label>
        <input 
            placeholder='Enter the Title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />

        <label>Album:</label>
        <input 
            placeholder='Enter the Album'
            value={album}
            onChange={(e)=>setAlbum(e.target.value)}
        />

        <label>Artist:</label>
        <input 
            placeholder='Enter the Artist'
            value={artist}
            onChange={(e)=>setArtist(e.target.value)}
        />
        
        <button>Add</button>
    </div>
  )
}

export default MusicInfomationInput