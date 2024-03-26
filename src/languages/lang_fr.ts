import type { Translation } from "@/types";

export const lang_fr: Translation = {
	you: 'Vous',
	colors: {
		red: 'Rouge',
		blue: 'Bleu',
		green: 'Vert',
		yellow: 'Jaune'
	},
	subtitle: 'La victoire point par point!',
	by: 'Un jeu créé par',
	aim: {
		title: 'Objectif du Jeu',
		text: [
			'Connectez quatre cartes',
			'de la même',
			'couleur directement adjacentes les unes aux autres en ligne, en colonne ou en diagonale.'
		]
	},
	rules: {
		title: 'Comment Jouer ?',
		text: [
			"Les joueurs placent tour à tour la carte du dessus de leur paquet mélangé sur le plateau de jeu. La carte peut être placée sur n'importe quel côté d'une carte déjà posée (marqué par les carrés gris).",
			'La carte à poser peut également être placée sur une autre carte déjà posée si elle a une valeur plus élevée.',
			'Il est recommandé de jouer avec 4 joueurs, mais le jeu peut également être démarré avec moins.'
		]
	},
	back: 'Retour',
	createRoom: 'Créer une Salle',
	joinRoom: 'Rejoindre une Salle',
	closeRoom: 'Fermer la Salle',
	leaveRoom: 'Quitter la Salle',
	players: 'Joueurs',
	waitingForPlayers: {
		self: 'En attente que vous commenciez la partie...',
		others: "En attente que l'hôte commence la partie..."
	},
	kick: 'Exclure',
	free: 'libre',
	startGame: {
		new: 'Démarrer',
		again: 'Recommencer'
	},
	endRound: 'Terminer la Manche',
	turn: 'Tour',
	yourTurn: "C'est à vous de jouer",
	notConnected: 'Aucune salle connectée',
	noMoreCards: 'Fin du tour : plus de cartes en jeu!',
	toasts: {
		roomNotFound: 'Salle introuvable!',
		kick: 'Vous avez été exclu(e)!',
		win: 'a gagné!',
		winnerWhenNoCards: 'Le joueur avec le plus de séries de 3 gagne!',
		nameMissing: 'Veuillez entrer un nom!',
		roomCodeNotValid: 'Veuillez entrer un code de salle valide!',
		noMatchingRoom: "Il n'y a aucune salle avec ce code!",
		roomFull: 'Cette salle est déjà pleine!',
		nameAlreadyTaken: 'Il y a déjà un joueur avec ce nom!',
		roundStarted: "La manche a déjà commencé! Veuillez attendre qu'elle se termine.",
		playerLeft: 'a quitté la salle!',
		playerJoined: {
			new: 'a rejoint la salle!',
			again: 'est de retour!'
		}
	},
	shareText: 'Inviter des Amis',
	inviteText: 'Veux-tu jouer à Punto avec moi?',
	gameTypes: {
		one: 'Mode 1 Joueur : Votre adversaire le plus coriace, c’est vous-même.',
		two: 'Mode 2 Joueurs : Chaque joueur joue avec deux couleurs.',
		three: [
			'Mode 3 Joueurs : Chaque joueur joue avec une couleur. La',
			'quatrième couleur',
			"est neutre et ne gagne pas avec 4 d'affilée."
		],
		four: 'Mode 4 Joueurs : Chaque joueur joue avec une couleur.'
	},
	order: 'Ordre',
	winsWithThrees: ['gagne avec', 'séries de 3'],
	reconnect: {
		title: 'Une ancienne partie est toujours en cours. Voulez-vous vous reconnecter?',
		reconnect: 'Reconnecter',
		dismiss: 'Rejeter'
	},
	rename: 'Renommer'
};
