const Discord = require('discord.js');
const fs = require("fs")
const client = new Discord.Client();
let points = JSON.parse(fs.readFileSync('./typing/typePTS.json', 'utf8'));

client.login(process.env.BOT_TOKEN);

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('Welcome Ryan !');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`the bot is online as [ " ${client.user.username} " ]`);
client.user.setStatus("dnd");
});

//----------------------------------------
//
//
//      Owner Private Commands
//
//
//----------------------------------------

//set playing

var prefix = "$";
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if(!message.member.hasPermission('ADMINISTRATOR')) return;

if (message.content.startsWith(prefix + 'setplaying')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'setwatching')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'setlistening')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'setstreaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});

//Broadcast

client.on("message", message => {
    var prefix = "$";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**$bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });
	
	
//كم صار للبوت شغال

client.on('message', message => {
    var prefix = "$"
if (message.content.startsWith(prefix + "uptime")) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	if(!message.member.hasPermission('ADMINISTRATOR')) return;
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

//كود لي رسالة تجي للبوت تروح لروم محدد

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``رسالة جديدة في الخاص``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("444128684304105482").send({embed:iiMo});
    }
});

//كود الساي

client.on('message', message => {
        var prefix = "$";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
		  if(!message.member.hasPermission('ADMINISTRATOR')) return;
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
	  
//------------------------------------------------------
//
//
//               Public Commands
//
//
//------------------------------------------------------


//Commands Help

client.on("message", message => {
    if(!message.channel.guild) return;
	if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#060606")
         .setFooter('Mario Bot')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     **✨Bot Commands | أوامر البوت✨**
   **
$info
اظهار معلومات مهمة حول السيرفر

----------------------------------------------

$report
للابلاغ عن أي مخالفة بالسيرفر

----------------------------------------------

$id
لاظهار معلومات عن حسابك

----------------------------------------------

$server
لاظهار معلومات عن السيرفر

----------------------------------------------

$avatar
لاخذ صورة اي شخص عن طريق منشنته

----------------------------------------------

$ping
لقياس سرعة اتصال البوت 

----------------------------------------------

أوامر الالعاب :-

$type | سرعة الكتابة
$fkk | تفكيك الكلمة
$3wasm | احزر عاصمة الدولة

$points | لمعرفة اجمالي نقاطك بالالعاب

----------------------------------------------

للأوامر الادارية قم بكتابة امر $staffhelp 

**
   -
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
//أمر معلومات السيرفر

client.on('message', msg => {
    if (msg.content === '$info') {
      msg.reply('**Minecraft ip : Soon..**');
			      msg.reply('**staff apply : https://goo.gl/forms/cXr7pulXgSgo5JDJ3**');
						    msg.reply('**our Whatsapp : https://chat.whatsapp.com/L1U9y4eu9iw5Hbs2F2nTrf**');
    }
  });
  
  //ريبورت
  
 client.on('message' , message => {
var prefix = "$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "report")) {
	message.delete();
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
let reason = message.content.split(" ").slice(1).join(" ");
if(!reason) return message.reply ("**اكتب شكوتك بوضوح**").then(msg => msg.delete(5000));
let demon = new Discord.RichEmbed()
.addField('**المرسل:**', message.author.tag)
.addField('**الشكوى:**', args)
client.channels.get("444129258101669888").send(demon)

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الشكوى للادارة بنجاح') 
     .setThumbnail(message.author.avatarURL)
     .setFooter("Mario Reports")
                                                

message.channel.send(embed).then(msg => msg.delete(5000));


}
    
});

//امر الاي دي 

client.on("message", msg => {
    var prefix = "$";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply;         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});

//أمر معلومات السيرفر

client.on('message', message => {
    if (message.content === "$server") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
    .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
    .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
    .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥عدد الاعضــاء",`
    **${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
    
    }
    });
	
//أمر الافاتار

client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//أمر البنق

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('$ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
					
//-----------------------------------------------------
//                                                    |
//       Games Commands + points                      |
//                                                    |
//-----------------------------------------------------

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = { // يقوم الكود تلقائياً في حال لم يجد نقاط العضو بإنشاء نقاط له ويتم إرسالها الملف المخصص
	points: 0,
  };
if (message.content.startsWith(prefix + 'type')) { // $سرعة
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/type.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 10 ثواني لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("For Points Type $points")
	.setDescription(`**قم بكتابة : ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});
//كود فكك الكلام

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = { // يقوم الكود تلقائياً في حال لم يجد نقاط العضو بإنشاء نقاط له ويتم إرسالها الملف المخصص
	points: 0,
  };
if (message.content.startsWith(prefix + 'fkk')) { // $سرعة
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/fkk.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتفكيك الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("For Points Type $points")
	.setDescription(`**قم بكتابة : ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بتفكيك الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بتفكيك الكلمة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});

//عواصم

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = { // يقوم الكود تلقائياً في حال لم يجد نقاط العضو بإنشاء نقاط له ويتم إرسالها الملف المخصص
	points: 0,
  };
if (message.content.startsWith(prefix + '3wasm')) { // $سرعة
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./typing/3wasm.json'); // في هذا السطر يقوم الكود بقراءة ملف الأسئلة
const item = type[Math.floor(Math.random() * type.length)]; // الأرراي المخصص للأسئلة
const filter = response => { // في هذا السطر يقوم بصنع فلتر للأجوبة
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة عاصمة الدولة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("For Points Type $points")
	.setDescription(`**قم بكتابة عاصمة: ${item.type}**`) // ${item.type} = السؤال
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بالاجابة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`:x: **لم يقم أحد بالاجابة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});

//أمر نقاط الالعاب

client.on('message', message => {
if (message.content.startsWith(prefix + 'points')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت سرعة الكتابة")
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./typing/typePTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});


//------------------------------------------------------------
//
//
//         Adminstration Commands | أوامر الادارة
//
//
//------------------------------------------------------------

//Warn | أمر الانذار

var prefix = "$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return;
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
  if (message.mentions.users.size < 1) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "warn") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x831f18)
    message.channel.sendEmbed(say);
	client.channels.get("444128499519717387").send({embed : say})
    client.channels.get("444128499519717387").send(`**Admin : ${message.author.username}#${message.author.discriminator}**`)
    message.delete();
  }


});


  
//أمر الميوت

client.on('message', message => {   
  if (message.author.boss) return;
  var prefix = "$";
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "mute") {
  if (!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
  let user = message.mentions.users.first();
  let log = message.guild.channels.find("name", "admin-log")
  let muteRole = message.guild.roles.find("name", "Muted");
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
  if (message.mentions.users.size < 1) return;
  let reason = message.content.split(" ").slice(2).join(" ");
  if(!reason) return message.reply ("**اكتب سبب الميوت**").then(msg => {msg.delete(5000)});
  message.guild.member(user).addRole(muteRole);
  const muteembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Muted!`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL)
  .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
  .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
  .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
  .addField("User", user, true)  
  message.channel.send({embed : muteembed});
  client.channels.get("444128499519717387").send({embed : muteembed})
  var muteembeddm = new Discord.RichEmbed()
  .setAuthor(`Muted!`, user.displayAvatarURL)
  .setDescription(`
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 
  
  [ ${reason} ] : السبب
  
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤولين 
  `)
  .setFooter(`في سيرفر : ${message.guild.name}`)
  .setColor("RANDOM")
   user.send( muteembeddm);
  }
 });
 
 //أمر البان
 
   var prefix = "$"
client.on('message', message => {
  if (message.author.ban) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  client.channels.get("444128499519717387").send({embed : banembed})
}
});


//chat clear

client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
      if(!message.channel.guild) return;
	if (!message.member.hasPermission('MOVE_MEMBERS')) return;
	  
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
  
  //staffhelp 
  
    client.on("message", message => {
    if(!message.channel.guild) return;
	if (message.content === "$staffhelp") {
	if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
     const embed = new Discord.RichEmbed() 
         .setColor("#060606")
         .setFooter('Mario Bot')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     **✨Administrationr Commands | اوامر الاداره✨**
   **
$warn <@tag> <محتوى الانذار>
لاعطاء شخص ما انذار في حال مخالفته لقواعد السيرفر**

------------------------------------------------------------------
**
$mute <@tag> <reason>
لاعطاء شخص ميوت في حال خالف القوانين مرة اخرى بعد اعطائه انذار**

------------------------------------------------------------------

أمر البان
**
$ban <@tag> <reason>
يستخدم في حال نشر احد سيرفر او قام بالسب الصوتي**

------------------------------------------------------------------

**
$clear <amount>
يستخدم لمسح الشات

لا تمسح الشات الا في وقت الضرورة**

------------------------------------------------------------------

لاظهار هذه الصفحة مرة اخرى قم بكتابة *staffhelp 

**- جميع اوامر الادارة في شات الادارة عدا الانذار ومسح الشات في الشات الذي خالف به**
   -
   `)
   message.author.sendEmbed(embed)
   
   }
   });  
   
 //Done.
