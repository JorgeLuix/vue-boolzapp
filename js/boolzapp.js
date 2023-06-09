

const {createApp} = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
            id:1,
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            id:2,
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            id:3,
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            id:4,
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            id:5,
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            id:6,
            name: 'Claudia',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            id:7,
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            id:8,
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ],
    activeContact: null,
    newMessage: '',
    chatSearch: '',
    lightMenu: false,
    showMenu: false,
    writing: false,
    selectChat: false,
    homePage: true,
    deletDropdown: false,
    }
    
  },
 
  methods: {
    /******seleziona un contatto attivo */
    setActiveContact(contact) {
      this.homePage = false;
      this.activeContact = contact;
      
    },
    /********funzione per filtrare contatti */
   filteredContacts() {
        return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().startsWith(this.chatSearch.toLowerCase())
        })
      },
      /****funzione risposte random***/
      getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
      
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.activeContact.messages.push({
          date: new Date().toLocaleString(),
          message: this.newMessage.trim(),
          status: 'sent'
        });
        this.newMessage = '',

        answers = ["☼-☼! x.x (^☼^)",
        "Va bene",
        "Cosa vuoi..",
        "Messaggio predeterminato: Non rompere",
        "Non dimenticare ",
        ];

        answer = this.getRndInteger(0, answers.length - 1)
        
        this.newMessage = '',
        this.writing = "started"
        setTimeout(() => {
             
            this.activeContact.messages.push({
              date: new Date().toLocaleString(),
              message: answers[answer],
              status: 'received'
            });
            this.writing = "ended"
          }, 2000);
          setTimeout(() => { 
            this.writing = false;

        }, 4000);
     };
     
       
    },
    deleteMessages() {
        this.activeContact.messages = [];
        this.deletDropdown = false;
    },
    deleteChat() {
        this.contacts.splice(this.activeContact, 1);
        console.log(this.activeContact)
        this.deletDropdown = false;
        this.homePage = true;
    },
   /* changeTheme() {
        this.modeTheme = !this.modeTheme;
        const body = document.querySelector('body');
        body.classList.toggle('darkTheme');
    }*/
    changeTheme() {
        this.modeTheme = !this.modeTheme;
        this.lightMenu = !this.lightMenu;
        if (this.lightTheme) {
        document.querySelector("body").className = "lightTheme"
        }
        else {
        document.querySelector("body").className = "bgblack"
        }
    }
},

      
    
}).mount('#app')