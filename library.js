const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function () {
  for (const playlistId in library.playlists) {
    // console.log(playlistId);
    const playlist = library.playlists[playlistId];
    //   console.log(playlist);
    const trackCount = playlist.tracks.length;
    console.log(
      `${playlist.id}: ${playlist.name} - ${trackCount} track${
        trackCount !== 1 ? "s" : ""
      }`
    );
  }
};

// printPlaylists(library);



// <---------------------------------------------------------------->
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  for (const trackId in library.tracks) {
    // console.log(trackId);
    const trackInfo = library.tracks[trackId];
    // console.log(trackInfo);
    console.log(
      `${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist} (${trackInfo.album})`
    );
  }
};
// printTracks(library)



// <---------------------------------------------------------------->
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  const myPlayList = library.playlists[playlistId];
  //  console.log(myPlayList.tracks);
  console.log(`<-------------------------------->`);
  console.log(
    `${myPlayList.id}: ${myPlayList.name} - ${myPlayList.tracks.length} tracks`
  );

  for (const trackId of myPlayList.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} ${track.artist} (${track.album})`);
  }
  console.log(`<-------------------------------->`);
};
// printPlaylist("p01");



// <---------------------------------------------------------------->
// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
};

//console.log(addTrackToPlaylist("t10", "p01"));

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function (name, artist, album) {
    const newTrackId = generateUid();
    library.tracks[newTrackId] = {
      id: newTrackId,
      name: name,
      artist: artist,
      album: album,
    };

};

addTrack("Baby calm down", "Salena", "calm down 2022");
console.log(library.tracks)

// adds a playlist to the library
const addPlaylist = function (name) {
  const newPlaylistId = generateUid();
  library.playlists[newPlaylistId] = {
    id: newPlaylistId,
    name: name,
    tracks: [],
  }
};

addPlaylist("Love in the air")
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};
