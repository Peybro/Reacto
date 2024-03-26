import type { Translation } from "@/types";

export const lang_en: Translation = {
	you: 'You',
	colors: {
		red: 'Red',
		blue: 'Blue',
		green: 'Green',
		yellow: 'Yellow'
	},
	subtitle: 'Point over point to victory!',
	by: 'A game by',
	aim: {
		title: 'Objective of the Game',
		text: [
			'Connect four cards of',
			'the same color',
			'directly adjacent to each other in a row, column, or diagonal.'
		]
	},
	rules: {
		title: 'How to Play?',
		text: [
			'Players take turns placing the top card of their shuffled deck on the game board. The card can be placed on any side of a card already laid out (marked by the gray squares).',
			'The card to be placed can also be placed on another card already laid out if it has a higher value.',
			'It is recommended to play the game with 4 players, but it can also be started with fewer.'
		]
	},
	back: 'Back',
	createRoom: 'Create Room',
	joinRoom: 'Join Room',
	closeRoom: 'Close Room',
	leaveRoom: 'Leave Room',
	players: 'Players',
	waitingForPlayers: {
		self: 'Waiting for you to start the round...',
		others: 'Waiting for the host to start the round...'
	},
	kick: 'Kick',
	free: 'vacant',
	startGame: {
		new: 'Start',
		again: 'Restart'
	},
	endRound: 'End Round',
	turn: 'Move',
	yourTurn: "It's your turn",
	notConnected: 'No room connected',
	noMoreCards: 'Round over: No more cards in play!',
	toasts: {
		roomNotFound: 'Room not found!',
		kick: 'You have been kicked!',
		win: 'has won!',
		winnerWhenNoCards: 'The player with the most 3-in-a-row sets wins!',
		nameMissing: 'Please enter a name!',
		roomCodeNotValid: 'Please enter a valid room code!',
		noMatchingRoom: 'There is no room with this code!',
		roomFull: 'This room is already full!',
		nameAlreadyTaken: 'There is already a player with this name!',
		roundStarted: 'The round has already started! Please wait until it is over.',
		playerLeft: 'has left the room!',
		playerJoined: {
			new: 'has joined the room!',
			again: 'has rejoined the room!'
		}
	},
	shareText: 'Invite Friends',
	inviteText: 'Do you want to play Punto with me?',
	gameTypes: {
		one: '1-Player-Mode: Your toughest opponent is yourself.',
		two: '2-Player-Mode: Each player plays with two colors.',
		three: [
			'3-Player-Mode: Each player plays with one color. The',
			'fourth color',
			'is neutral and does not win with 4 in a row.'
		],
		four: '4-Player-Mode: Each player plays with one color.'
	},
	order: 'Order',
	winsWithThrees: ['wins with', '3-in-a-row sets'],
	reconnect: {
		title: 'An older game is still running. Do you want to reconnect?',
		reconnect: 'Reconnect',
		dismiss: 'Dismiss'
	},
	rename: 'Rename'
};
