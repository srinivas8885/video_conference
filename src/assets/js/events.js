import helpers from './helpers.js';

window.addEventListener( 'load', () => {
    document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        
        let yourName = document.querySelector( '#your-name' ).value;

        if ( yourName ) {
            document.querySelector('#err-msg').innerText = "";
            sessionStorage.setItem( 'username', yourName );
            // Generate a unique room name
            let roomName = `_${helpers.generateRandomString()}`;
            window.location.href = `${location.origin}?room=${roomName}`;
            document.querySelector( '#your-name' ).value = '';
        }
        else{
            document.querySelector('#err-msg').innerText = "Enter the Name to create the room";
        }
    } );


    //When the 'Enter Join' button is clicked.
    document.getElementById( 'enter-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        let name = document.querySelector( '#username' ).value;
        if (!name) {
            name = 'Guest';
        }
        if ( name ) {
            sessionStorage.setItem( 'username', name );
            location.reload();
        }
    } );
} );
