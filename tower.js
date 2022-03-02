        var questions = [
			"You wake up in a dark musky stone room. The room rises up to a point some 4 feet out of reach. The hand sized window behind you lets fresh air poor in. You see a cot next to you on your right and a bucket to your left. In front of you a door with just a small slit of light under the door in an otherwise dark room. What do you do?",
        	"Yeah, I don't know man come, on I bet we could just walk in and take him out. I don't think you understand. The wizard told us to make sure no one in, no one out. The prisoner is super dangerous. oh come on, just a little torture? We just greased the lock. Its silent no one would even know.Shut up. You know the plan.",
			"You run up the stairs 2 at a time. And charge up to the closed door and burst through it. The door slams against the inner wall allowing you to see the dark wizard of the tower standing in the middle of a small circular room. The room is filled wall to ceiling in bookshelves. Most look abandoned to the mercy of dust and cobwebs. But as you focus on the man standing with his back to you in the middle of the room the shelves fade, and the faint whisper of a chuckle comes to your ears. The room grows foggy and white. Ah so the sleeping giant finally comes to my door. Well I guess we must finish this then? *You nod* Fine, I'm too old for this. So here is the truth. I am currently channeling protections and wards that allow me to speak freely without you destroying me. However, If I am to beat you I must cast arcane missile at you. We both know that I won't survive as I don't have the energy to cast it and the protections. So... we are at a standstill. A silence ensues. The man turns slowly to face you with just a small sad smile. I guess I have one chance to walk out of this alive."];
        var answers = [2,1,1];
        var possibles = [
                            ["You wait for hours to see what is going on.", "You pick up the bucket.", "You crawl as quietly as you can to the door and put your ear to the door."],
                            ["Bust the door down and take on these puny guards.", "Try quietly opening the door and knocking the guards out.", "Heck! I can take them"],
							["Stand still and wait to call his bluff", "Walk slowly toward him", "Run! This guy has lost it!"]
                        ]
		var wrongs = [
                            ["Your adventurous soul crushed by the black stone walls and the cold. The swirling cold coming up and seeping into every pore in your body. After a while a guard walks in and takes you out of the room. You are so cold you can barely stand. You are half dragged half supported by the guard. You walk down stairs for what seems like hours till you are faced toward a door. The guard pushes you toward it. As You walk up to the normal sized door, you feel a pull of dark energy. Every empty space in your chest pulls to the door. You feel your hand start to reach for the door as your mind screams in horror. Your hand reaches the door and it bursts open.  Whatever is behind the door you can feel is sucking the life force out of you. The darkness calls to you and the nothingness of surrender pulls for your heart. As you look around you have already walked several steps.  The shadows stir, and your body grows cold. As the heat and light in your body starts to fade you give in to oblivion and your body disappears. GAME OVER!", "You now realize the purpose of the bucket. Yuck! Well, at least it might be a good weapon.", ""],
                            ["You start to feel a red rage fill your veins and you rip the door off its hinges with one hand and fling it into your old prison room. Nothing can hold you. The guards turn to face you. Your swing takes the guard on the left under the jaw and he slumps to the ground without a fight. The other guard just turns and screams. GAME OVER YOU ARE A BABARIAN!", "", "You hold your hands out and electricity jumps from your hands and jumps off the walls and crackle off the hinges of the door jumping to the plate armor of the guards jumping back and forth. The corpses of the guard’s slump to the ground smoking and a faint burning smell comes from their head. You step forward and a random bolt jumps off the smoking corpses and you drop dead. GAME OVER!"],
							["Shake your head and smile. You must smile. He is taking the biggest chance of his life to take you out of the picture. As he focuses on his hands to force them to stop shaking. Then as you wait missiles impale you into the wall. Your body starts to convulse and tremble. Blood flows from each entry point. The man drops and crumples to the floor. Dead instantly. As you watch the floor fill with your blood you feel your grip of reality start to fade and succumb to the darkness that comes after. Game OVER!", " ", "You book it to the door but missiles impale you into the wall. Your body starts to convulse and tremble. Blood flows from each entry point. The man drops and crumples to the floor.  Dead instantly. As you watch the floor fill with your blood you feel your grip of reality start to fade and succumb to the darkness that comes after. Game OVER!"]
                        ]
        function startZork() {
            document.getElementById('question').innerHTML = questions[0];
            for(i = 0; i < possibles[0].length; i++)
            {
                document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML + '<button onclick="checkAnswer(0,' + i +  ')">' + possibles[0][i] + '</button>';
            }
        }
        function checkAnswer(question,answer) {
            if (answer == answers[question])
            {
                if (questions[question + 1])
                {
                   	document.getElementById('question').innerHTML = questions[question + 1];
                    document.getElementById('answer').innerHTML = '';
                    document.getElementById('response').innerHTML = '';
                    for(i = 0; i < possibles[question+1].length; i++)
                    {
                        document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML + '<button onclick="checkAnswer(' + (question + 1) + ',' + i +  ')">' + possibles[question + 1][i] + '</button>';
                    }
                }
                else
                {
                    document.getElementById('question').innerHTML = "You walk slowly with just a limp in your leg. Its been a long day. But as you walk up to the crumpled and broken man you notice the room fade from the bright white to a dark run-down room again. The shelves appear and the paintings you previously didn't see start to appear around the room. As you reach the middle of the room and see the old broken man you pull the cloak off him and his gold pouch.You slowly start to walk toward the door where your room is. As you approach the door the tower responds to its master. Knowing its intent and opens with just a slight motion. The body disappears, and you feel the familiar comfort of the master bedroom of the Dark Wizard Tower. THANKS FOR PLAYING!";
                    document.getElementById('answer').innerHTML = '';
                    document.getElementById('response').innerHTML = '';
                }
            }
            else
            {
                document.getElementById('response').innerHTML = wrongs[question][answer];
            }
        }