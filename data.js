const days = [
  {
    day: 1,
    theme: "The Big Reveal",
    idea: "Unboxing / first-look reveal of BLOOM BOLDLY",
    hook: "I made something for every woman who needs to breathe again.",
    visual: "Hands slowly unwrapping or opening the coloring book on a soft floral surface. Warm golden light. Petals or flowers scattered nearby. Close-up of the cover, then slow page flip revealing gorgeous floral pages.",
    caption: "This isn't just a coloring book. It's permission to slow down. Permission to create. Permission to BLOOM. 🌸",
    cta: "Link in bio to grab yours on Amazon. Drop a 🌺 if you need this in your life.",
    todo: [
      "Film the reveal video with soft lighting and flowers as props",
      "Edit with slow-motion effect and gentle music",
      "Post across TikTok, Reels, and Facebook",
      "Reply to every comment within 2 hours",
      "Pin to Pinterest with keyword-rich description"
    ],
    hashtags: "#ColoringBook #BloomBoldly #WomenWhoCreate #SelfCare #AdultColoring #CreativeWomen #HealingArt #FlowerArt #Relaxation #Empowerment"
  },
  {
    day: 2,
    theme: "The Stress Relief Post",
    idea: "Relatable humor: 'This is cheaper than therapy'",
    hook: "Therapy: $200/hour. This coloring book: $14.99. Both valid.",
    visual: "Split screen — left: woman looking stressed at a laptop. Right: same woman, visibly relaxed, coloring a flower page with soft music vibes.",
    caption: "No shade to therapy (seriously, go to therapy). But sometimes you just need to color a peony and let it all go. 🌿",
    cta: "Tag a friend who needs this. Grab it on Amazon — link in bio.",
    todo: [
      "Film the split-screen or before/after stress concept",
      "Add trending audio that matches the vibe",
      "Post to TikTok and Reels",
      "Engage in comments — ask followers what's your stress relief ritual",
      "Respond to all DMs"
    ],
    hashtags: "#StressRelief #CheaperThanTherapy #AdultColoringBook #MentalHealthMatters #SelfCareWomen #ColoringTherapy #BloomBoldly #Relaxation #WomenOver40 #GenX"
  },
  {
    day: 3,
    theme: "Emotional Storytelling",
    idea: "Why I made this book — the personal origin story",
    hook: "There was a season of my life when I forgot who I was. This book is how I found my way back.",
    visual: "Creator on camera or voiceover with B-roll of coloring pages, soft and honest. No heavy editing. Real, raw, relatable. End on a finished colored page that is beautiful.",
    caption: "Every page in this book was designed for the woman who has been so busy taking care of everyone else, she forgot to take care of herself. 💛",
    cta: "If this resonates, save this post. And if you're ready to bloom — link in bio.",
    todo: [
      "Write a 60-second script for your origin story",
      "Film in natural light, minimal makeup, authentic",
      "Post to Facebook and TikTok",
      "Share to your Facebook Stories",
      "Engage with comments emotionally and personally"
    ],
    hashtags: "#WomenEmpowerment #HealingJourney #BloomBoldly #ColoringBook #AuthenticWomen #SelfDiscovery #WomenOver50 #PersonalGrowth #FlowerTherapy #CreativeHealing"
  },
  {
    day: 4,
    theme: "Satisfying ASMR Coloring",
    idea: "Real-time coloring video — pure visual satisfaction",
    hook: "Watch this and try NOT to feel calm. I dare you.",
    visual: "Close-up hands coloring a detailed floral page. Soft colored pencil sounds. Beautiful color choices — magentas, corals, sage greens. Time-lapse or real-time with ASMR audio.",
    caption: "Five minutes of this and your cortisol literally drops. Science. (Okay, vibes. But also science.) 🌸",
    cta: "Save this for when you need a reset. Book link in bio.",
    todo: [
      "Film a 30-60 sec close-up coloring session with good mic for pencil sounds",
      "Edit with minimal cuts for maximum calm",
      "Post to all platforms",
      "Add Pinterest pin with adult coloring ASMR keywords",
      "Engage with what color should I use next comments"
    ],
    hashtags: "#ColoringASMR #SatisfyingVideo #AdultColoring #BloomBoldly #CalmnessIs #PencilASMR #FlowerColoring #RelaxingContent #MindfulColoring #ZenMoment"
  },
  {
    day: 5,
    theme: "Women Supporting Women",
    idea: "Gift this to a woman who needs it — gifting angle",
    hook: "Every woman you know is carrying something heavy right now.",
    visual: "Hands wrapping the book as a gift with ribbon and flowers. Or two women sharing a coloring moment together — laughing, creating. Warm, joyful, sisterhood energy.",
    caption: "The most powerful thing we can do for each other is say I see you. I thought of you. Send this to someone who needs to bloom. 🌺",
    cta: "Tag her below. Or grab a copy for yourself — you deserve it too. Link in bio.",
    todo: [
      "Film a gift-wrapping or coloring with a friend scene",
      "Post to Facebook — great for sharing among friend groups",
      "Create a Pinterest gift idea pin",
      "Ask in comments: Who would you gift this to?",
      "Reply to every tag"
    ],
    hashtags: "#GiftForWomen #WomenSupportingWomen #GiftIdeas #BloomBoldly #ColoringBookGift #ForHer #SelfCareGift #FriendshipGoals #WomensGifts #SisterVibes"
  },
  {
    day: 6,
    theme: "Color Palette Inspo",
    idea: "Color palette tutorial using pages from the book",
    hook: "The colors you choose say everything about your mood. Here's what mine said today.",
    visual: "Flat lay of open book pages with color swatches, markers and pencils arranged beautifully. Creator hand-picks colors and explains their mood. Aesthetic and intentional.",
    caption: "Today I chose soft pinks and gold because I needed to feel gentle with myself. What would you choose? 🌷",
    cta: "Save this for your next coloring session. Book link in bio.",
    todo: [
      "Set up a flat lay with the book plus art supplies plus color swatches",
      "Film or photograph with natural light",
      "Post to Pinterest and Instagram first, then TikTok",
      "Ask followers to share what colors match their mood today",
      "Engage all responses"
    ],
    hashtags: "#ColorPalette #ColorInspiration #AdultColoringBook #BloomBoldly #ArtSupplies #ColorTherapy #CreativeWomen #FlatLayAesthetic #ColorfulLife #MoodColors"
  },
  {
    day: 7,
    theme: "Day 7 Check-In",
    idea: "One week in — invite followers into the journey",
    hook: "It's been one week since I launched this book and I have to tell you something.",
    visual: "Creator on camera, genuine and excited. Show comments, messages, or community reactions. Make followers feel like they are part of something.",
    caption: "The DMs I've been getting this week have made me ugly cry in the best way. You are not alone. And you WILL bloom. 🌻",
    cta: "Drop a 🌸 if you've ordered your copy. Tell me in the comments — what's YOUR favorite flower?",
    todo: [
      "Film a genuine Week 1 check-in video",
      "Screenshot and share kind comments and DMs with permission",
      "Post to TikTok, Reels, Facebook",
      "Run a favorite flower poll in Stories",
      "Respond to every comment today"
    ],
    hashtags: "#CommunityLove #BloomBoldly #ColoringCommunity #WomenWhoCreate #WeekOneWins #GratefulCreator #AdultColoring #YouAreNotAlone #FlowerLovers #BloomWherePlanted"
  },
  {
    day: 8,
    theme: "The Transformation Post",
    idea: "Before/after coloring a single page — time-lapse",
    hook: "Blank page to beautiful in 20 minutes. Watch.",
    visual: "Side-by-side or time-lapse of a blank book page transforming into a richly colored masterpiece. Uplifting music. End frame: the finished page held up proudly.",
    caption: "This is what happens when you give yourself 20 minutes. You remember you're an artist. 🎨🌸",
    cta: "Which color combo would YOU choose? Comment below. Book link in bio.",
    todo: [
      "Set up camera above coloring session and film full time-lapse",
      "Edit down to 30-45 seconds with music",
      "Post to all platforms",
      "Pinterest: create before/after coloring pin",
      "Engage: ask followers to share their own coloring transformations"
    ],
    hashtags: "#ColoringTransformation #BeforeAndAfter #TimeLapse #BloomBoldly #AdultColoringBook #ArtTransformation #CreativeProcess #ColorYourWorld #FlowerArt #YouAreAnArtist"
  },
  {
    day: 9,
    theme: "Relatable Humor",
    idea: "POV: You bought another coloring book — self-aware humor",
    hook: "POV: You swore you didn't need another coloring book. Narrator: She needed another coloring book.",
    visual: "Creator doing a deadpan look to camera. Cut to a pile of coloring books. Cut to her opening BLOOM BOLDLY with a huge smile. Comedy plus relatability.",
    caption: "No regrets. Zero. This is the hobby that saved my sanity and I will not be accepting criticism at this time. 😂🌸",
    cta: "Tag your fellow coloring book hoarder. Link in bio if you're ready to join us.",
    todo: [
      "Film the POV comedy skit — keep it under 30 seconds",
      "Use trending audio if available",
      "Post TikTok and Reels first",
      "Engage: How many coloring books do YOU own? Be honest.",
      "Reply to every funny comment with humor"
    ],
    hashtags: "#ColoringBookAddict #POV #AdultColoringHumor #BloomBoldly #ColoringBookCollector #HobbyHoarder #TreatYourself #ColoringIsMyTherapy #FunnyWomen #RelatableContent"
  },
  {
    day: 10,
    theme: "Empowerment Message",
    idea: "Spoken word / affirmation reel over coloring footage",
    hook: "You are not behind. You are not too late. You are right on time to bloom.",
    visual: "Peaceful B-roll of hands coloring florals. Creator voiceover delivering a soft but powerful affirmation monologue. End with the book cover.",
    caption: "Wherever you are right now — that's your starting point. Not your ending. 🌺 Bloom boldly, friend.",
    cta: "Save this for when you need a reminder. Share with a woman who needs to hear it today.",
    todo: [
      "Write and record your 45-60 second affirmation voiceover",
      "Layer over coloring B-roll footage",
      "Post to TikTok, Reels, Facebook",
      "Create a quote graphic for Pinterest from the hook line",
      "Engage: ask what's the affirmation you need most today?"
    ],
    hashtags: "#WomenEmpowerment #DailyAffirmation #BloomBoldly #YouAreEnough #SelfLove #GrowthMindset #HealingQuotes #ColoringBook #PositiveMindset #BloomWhereYouArePlanted"
  },
  {
    day: 11,
    theme: "Behind the Scenes",
    idea: "How the book was designed — the creative process",
    hook: "Every single flower in this book has a meaning. Let me show you.",
    visual: "Behind-the-scenes of the design and creation process — sketches, digital files, test prints, final pages. Creator walks through the intention behind the florals.",
    caption: "The peony is for healing. The sunflower is for confidence. The wildflower is for women who refused to be tamed. Every page was designed with YOU in mind. 🌸",
    cta: "Which flower speaks to you? Comment below. Grab the book — link in bio.",
    todo: [
      "Compile behind-the-scenes footage or photos of the creation process",
      "Film a voiceover walkthrough of page meanings",
      "Post to all platforms",
      "Pinterest: Behind the scenes of a coloring book pin",
      "Engage: ask followers about their favorite flower and meaning"
    ],
    hashtags: "#BehindTheScenes #ColoringBookDesign #BloomBoldly #CreativeProcess #HowItsMade #BookCreator #FloralArt #AuthorLife #DigitalCreator #WomenWhoMakeThings"
  },
  {
    day: 12,
    theme: "Mindfulness Moment",
    idea: "5-minute mindfulness coloring challenge",
    hook: "Set a timer for 5 minutes. Grab literally ANY coloring tool. Just try it. I'll wait.",
    visual: "Creator sets a visible timer, picks up a coloring book, and colors for 5 minutes. Real, unedited, peaceful. End shot: deep breath, visible calm.",
    caption: "Five minutes. That's all it takes to shift your whole energy. You don't need an hour. You just need to start. ⏱️🌸",
    cta: "Try it right now and tell me how you feel after. BLOOM BOLDLY is the perfect book for this. Link in bio.",
    todo: [
      "Film the 5-minute challenge in real time or time-lapse",
      "Keep it raw and authentic — no heavy edits",
      "Post to TikTok and Reels",
      "Stories: Do a live 5-minute challenge",
      "Engage: ask followers to share their 5-minute challenge results"
    ],
    hashtags: "#5MinuteChallenge #MindfulColoring #ColoringChallenge #BloomBoldly #MindfulnessMatters #JustStart #SelfCareChallenge #ColoringTherapy #SlowDown #AdultColoring"
  },
  {
    day: 13,
    theme: "Viral Hook Experiment",
    idea: "Things that hit different when you're a woman over 40",
    hook: "Things that hit different after 40: wine, silence, and a really good coloring book.",
    visual: "Text overlay on aesthetic coloring footage. Quick cuts of peaceful coloring moments. Maybe a knowing smile to camera. Relatable and funny.",
    caption: "Nobody warned me that my 40s would be the era of knowing exactly what I need. Turns out I need flowers, quiet, and these colored pencils. 😂🌺",
    cta: "Tell me what hits different for YOU. And grab the book if you're ready for your peace era. Link in bio.",
    todo: [
      "Create text-overlay reel with trending audio",
      "Film aesthetic coloring clips to use as B-roll",
      "Post TikTok and Reels — lean into trending format",
      "Engage: What hits different for you after 40?",
      "Reply with humor and warmth to every comment"
    ],
    hashtags: "#Over40Women #WomenOver40 #GenXWomen #BloomBoldly #40AndFabulous #ThingsHitDifferent #AdultColoringBook #PeaceEra #MidlifeVibes #WomenOfACertainAge"
  },
  {
    day: 14,
    theme: "Two Weeks — Thank You",
    idea: "Gratitude plus social proof — show reviews and reactions",
    hook: "Two weeks ago I was terrified to put this out into the world. Here's what happened.",
    visual: "Creator on camera, emotional and genuine. Show screenshots of reviews, comments, DMs. End with a heartfelt thank you and close-up of the book.",
    caption: "You bought it. You colored it. You told me it made you cry — same, honestly. Two weeks in and I'm just so grateful this little book found its people. 💛",
    cta: "If you've colored BLOOM BOLDLY, leave a review on Amazon — it means the world. Link in bio.",
    todo: [
      "Compile review screenshots, blur names if needed",
      "Film genuine gratitude video",
      "Post to Facebook and TikTok",
      "Share to all Stories",
      "Ask for Amazon reviews in every comment reply today"
    ],
    hashtags: "#Grateful #TwoWeeks #BloomBoldly #CustomerLove #BookReviews #AdultColoringBook #WomenWhoCreate #AuthorGratitude #SocialProof #CommunityOverCompetition"
  },
  {
    day: 15,
    theme: "Color Your Feelings",
    idea: "Emotional color therapy — each color equals an emotion",
    hook: "Pick the color that matches how you feel RIGHT NOW. No wrong answers.",
    visual: "Creator lays out colored pencils and assigns each an emotion: yellow equals joy, blue equals peace, red equals power, pink equals softness, green equals growth. Then colors using that emotion.",
    caption: "Today I needed green. Growth. Moving forward. What do you need today? 🌿",
    cta: "Comment your color plus emotion. Grab the book to give your feelings somewhere beautiful to live. Link in bio.",
    todo: [
      "Film the color your feelings concept with clear visuals",
      "Post to TikTok, Reels, Pinterest",
      "Create a Pinterest infographic: What color are you feeling?",
      "Engage heavily — this post should spark conversation",
      "Compile responses for future content ideas"
    ],
    hashtags: "#ColorTherapy #ColorYourFeelings #EmotionalHealing #BloomBoldly #ArtTherapy #ColorPsychology #CreativeHealing #AdultColoring #FeelingsSafe #WomenHealing"
  },
  {
    day: 16,
    theme: "Teach Something",
    idea: "3 tips for beginners who think they can't color",
    hook: "If you think you're bad at coloring, this video is for you.",
    visual: "Creator demonstrates 3 simple coloring techniques — blending, layering, and staying loose. Each shown on a BLOOM BOLDLY page. Encouraging, approachable, fun.",
    caption: "There is no wrong way to color. There is only YOUR way. And your way is perfect. 🎨🌸",
    cta: "Save this for your next coloring session. And beginners — BLOOM BOLDLY was made for you. Link in bio.",
    todo: [
      "Prep and film 3 quick technique demos",
      "Edit with text overlays for each tip",
      "Post to all platforms",
      "Pinterest: Coloring tips for beginners tutorial pin",
      "Engage: ask what coloring tip would you add?"
    ],
    hashtags: "#ColoringTips #BeginnerColoring #HowToColor #BloomBoldly #ColoringForBeginners #ArtTips #AdultColoringBook #CreativeTips #ColoringTechniques #YouCanDoThis"
  },
  {
    day: 17,
    theme: "Aesthetic Flat Lay",
    idea: "The perfect coloring corner setup — aspirational lifestyle",
    hook: "This is your sign to create a little corner just for you.",
    visual: "Beautifully styled flat lay: BLOOM BOLDLY open to a gorgeous page, candle, tea, flowers, colored pencils fanned out, soft morning light. Pure aspirational cozy.",
    caption: "You don't need a whole room. You just need a corner. A candle. A coloring book. And 20 minutes that belong to YOU. 🕯️🌸",
    cta: "Save this for room inspo. Then grab the book and create YOUR corner. Link in bio.",
    todo: [
      "Style and photograph your coloring corner setup",
      "Use natural morning light if possible",
      "Post to Pinterest and Instagram first, then Facebook",
      "Ask followers to share their own creative corners",
      "Engage all shares and responses"
    ],
    hashtags: "#ColoringCorner #CozyAesthetic #FlatLayInspo #BloomBoldly #CreativeSpace #HomeAesthetic #AdultColoring #CandlesAndColoring #CozyVibes #CreateYourCorner"
  },
  {
    day: 18,
    theme: "The Hard Days Post",
    idea: "Honest post about hard days and how coloring helps",
    hook: "I'm not going to pretend everything is fine. But I am going to color through it.",
    visual: "Creator, honest and vulnerable on camera. Or text-over-video of hands coloring while music plays. Real, raw, no filter. This is the post that will stop a scroll.",
    caption: "Some days the only thing I can do is pick up a colored pencil and just start. One petal. Then another. Then suddenly I remember I'm still here. I'm still capable. I'm still blooming. 🌷",
    cta: "Save this post. Share it with someone who's having a hard week. You don't have to be okay to start.",
    todo: [
      "Write a genuine, honest script about a hard day",
      "Film authentically — minimal production",
      "Post to TikTok, Facebook, and Reels",
      "Monitor comments carefully and respond with empathy",
      "This post may go viral — engage quickly and consistently"
    ],
    hashtags: "#HardDays #ColoringThrough #HonestyHeals #BloomBoldly #MentalHealthAwareness #YouAreStillHere #HealingJourney #ColoringTherapy #RealTalk #WomenBeingHonest"
  },
  {
    day: 19,
    theme: "Launch the Challenge",
    idea: "Launch the BloomBoldlyChallenge — user-generated content",
    hook: "I want to see your coloring. Show me how YOU bloom.",
    visual: "Creator announces the challenge — color any page, post with #BloomBoldlyChallenge, tag the brand. Show an example of a finished colored page. Fun and inclusive.",
    caption: "Rules: 1. Color a page. 2. Post it. 3. Use #BloomBoldlyChallenge. That's it. There are no rules after that. 🌸",
    cta: "Buy the book, color a page, show me your BLOOM. Tag me and use the hashtag. Let's fill the internet with flowers. 🌺",
    todo: [
      "Film the challenge announcement video",
      "Post across all platforms",
      "Pin the challenge to the top of your profile",
      "Engage with EVERY person who uses the hashtag",
      "Repost UGC to your Stories all week",
      "Track submissions for a future compilation video"
    ],
    hashtags: "#BloomBoldlyChallenge #ColoringChallenge #UGC #BloomBoldly #CommunityColoring #ShowMeYourBloom #AdultColoringBook #CreateTogether #WomensArtChallenge #FlowerChallenge"
  },
  {
    day: 20,
    theme: "Milestone Celebration",
    idea: "Celebrate a sales or follower milestone with the community",
    hook: "We just hit a milestone and I'm not okay — in the best way.",
    visual: "Creator on camera, genuinely emotional and celebratory. Pull in a comment or review that meant the most. Make followers feel like THEY did this.",
    caption: "You did this. Every share, every tag, every I bought it — you built this with me. I don't take that lightly. 💛🌸",
    cta: "If you haven't grabbed your copy yet, today feels like the right day. Link in bio. Let's keep going.",
    todo: [
      "Film a genuine milestone reaction video",
      "Screenshot the milestone number for visual proof",
      "Post to all platforms",
      "Thank followers by name in comments where possible",
      "Boost this post on Facebook for extra reach"
    ],
    hashtags: "#Milestone #Grateful #BloomBoldly #SmallBusinessWin #CelebrateWomen #YouDidThis #AuthorLife #ColoringCommunity #WomenWhoCreate #ThankYou"
  },
  {
    day: 21,
    theme: "Healing and Grief Angle",
    idea: "Coloring as a grief and loss coping tool — deeply emotional",
    hook: "After my hard season, someone handed me a coloring book. I thought it was silly. I was wrong.",
    visual: "Soft, quiet footage of hands coloring. Creator voiceover sharing a personal or relatable story about loss, burnout, or grief. Gentle music. Emotional and healing.",
    caption: "Grief doesn't always look like crying. Sometimes it looks like sitting quietly and filling in a flower, one careful stroke at a time. 🌸",
    cta: "If you're in a hard season, this book is for you. Link in bio. You don't have to bloom all at once.",
    todo: [
      "Write and record an emotionally authentic voiceover",
      "Keep visuals soft and peaceful",
      "Post to Facebook and TikTok",
      "Monitor comments and respond with great care",
      "Have resources ready to share if someone needs support"
    ],
    hashtags: "#HealingJourney #GriefSupport #ColoringTherapy #BloomBoldly #YouAreNotAlone #HealingAfterLoss #CreativeGrief #SelfCareAfterLoss #GentleHealing #WomenWhoHeal"
  },
  {
    day: 22,
    theme: "Top 5 Favorite Pages",
    idea: "Page-by-page spotlight — your top 5 favorite pages",
    hook: "Five pages in this book that made me gasp when I printed them. Let me show you.",
    visual: "Creator slowly fans through or holds up 5 specific pages, describing each one with excitement. Close-up shots of the intricate floral designs.",
    caption: "Okay but the DETAIL on these pages. The hours that went into every petal. I'm biased but I'm also right — this book is gorgeous. 🌺",
    cta: "Which page would you color first? Comment your number. Grab the book — link in bio.",
    todo: [
      "Select your 5 most impressive pages",
      "Film or photograph each one with great lighting",
      "Create a Reel or TikTok with a page-flip reveal",
      "Pinterest: Inside BLOOM BOLDLY pin series",
      "Engage: ask followers to vote on their favorite page"
    ],
    hashtags: "#InsideTheBook #ColoringPageDesign #BloomBoldly #FloralDesign #DetailedColoring #AdultColoringBook #BookPreview #PageFlip #FlowerIllustration #ColoringBookPages"
  },
  {
    day: 23,
    theme: "Color With a Friend",
    idea: "Color with a friend, daughter, or other creator",
    hook: "We cleared the table, opened two coloring books, and didn't talk for an hour. Best hour of the week.",
    visual: "Two people coloring together at a table — comfortable silence, gentle laughter, showing each other finished sections. Warm and connected.",
    caption: "We don't always have to fill the silence. Sometimes just being next to someone, creating something beautiful, is enough. 🌸🌸",
    cta: "Who would you love to color with? Tag them. Grab two copies and make a date. Link in bio.",
    todo: [
      "Organize a coloring date with a friend, family member, or fellow creator",
      "Film the session candid-style",
      "Post to Facebook and TikTok",
      "If collabing with another creator: cross-post to their audience",
      "Engage: Who's your coloring buddy?"
    ],
    hashtags: "#ColoringDate #FriendshipGoals #ColorTogether #BloomBoldly #WomenSupportingWomen #CreativeDate #MomAndDaughter #SisterhoodVibes #ColoringWithFriends #QualityTime"
  },
  {
    day: 24,
    theme: "Seasonal Tie-In",
    idea: "Tie the book to the current season or upcoming holiday",
    hook: "This season, I'm choosing softness. I'm choosing creativity. I'm choosing to bloom.",
    visual: "Seasonal imagery plus coloring book — spring flowers, cozy fall lighting, holiday gift wrapping, summer garden vibes. Match the aesthetic to the current time of year.",
    caption: "Every season is a new chance to bloom. What are you growing into right now? 🌻",
    cta: "Grab BLOOM BOLDLY and make this season your most creative one yet. Link in bio.",
    todo: [
      "Film seasonal content that matches current date",
      "Incorporate season-specific props and colors",
      "Create a Pinterest seasonal pin",
      "Post to Facebook for holiday and seasonal sharing",
      "Engage: What are you planting this season — literally or figuratively?"
    ],
    hashtags: "#SeasonOfBloom #SpringVibes #BloomBoldly #SeasonalSelfCare #GiftIdeas #NewSeason #CreativeSeason #FlowerSeason #HolidayGift #GrowthSeason"
  },
  {
    day: 25,
    theme: "Main Character Energy",
    idea: "You are the main character — empowerment reel",
    hook: "You are the main character. It's time to start acting like it.",
    visual: "Creator, fully confident on camera. Bold aesthetic. Quick cuts of beautiful colored pages. Text overlays with power statements: You are enough. You are blooming. You are the main character.",
    caption: "The main character doesn't wait until she's ready. She starts anyway. She colors outside the lines. She blooms messily and beautifully. That's you. 🌸💪",
    cta: "Share this with the main character in your life. Book link in bio.",
    todo: [
      "Film a confident, bold reel — own the camera",
      "Layer power statement text overlays",
      "Use trending empowerment audio",
      "Post to TikTok and Reels",
      "Engage: What's YOUR main character era? Tell me below."
    ],
    hashtags: "#MainCharacterEnergy #WomenEmpowerment #BloomBoldly #ConfidenceBoost #YouAreEnough #MainCharacterEra #WomenWhoOwn #SelfConfidence #BoldWomen #BloomMessily"
  },
  {
    day: 26,
    theme: "Review Spotlight",
    idea: "Read and react to a real 5-star review",
    hook: "Someone wrote this review and I had to stop and cry in my car for a second.",
    visual: "Creator reads a genuine review on camera, reacts authentically. Then shows the specific page or theme the reviewer mentioned. Emotional, grateful, real.",
    caption: "This is why I made this book. Not for the sales. For THIS. For you. 💛",
    cta: "If BLOOM BOLDLY has touched your life, please leave a review on Amazon. It helps more women find it. Link in bio.",
    todo: [
      "Choose your most emotional or powerful review",
      "Film your genuine reaction — don't over-edit",
      "Post to Facebook and TikTok",
      "Screenshot review for Pinterest quote pin",
      "Reach out to that reviewer to thank them personally"
    ],
    hashtags: "#RealReviews #CustomerLove #BloomBoldly #5Stars #BookReview #TouchedMyHeart #AuthorLife #WomenSupportingWomen #AmazonReview #GratefulCreator"
  },
  {
    day: 27,
    theme: "Scrolling vs. Coloring",
    idea: "BLOOM BOLDLY vs. scrolling — honest comparison",
    hook: "You've been scrolling for 47 minutes. I've been coloring for 47 minutes. Want to know the difference?",
    visual: "Split screen: left — glazed-eye phone scrolling. Right — creator coloring peacefully, smiling. Then show the finished page vs. the phone. Humor meets truth.",
    caption: "No judgment. I scroll too. But this? This actually fills me up instead of emptying me out. 🌸📱",
    cta: "Put the phone down for 20 minutes. Pick up the book. You'll thank yourself. Link in bio.",
    todo: [
      "Film the split-screen comparison",
      "Keep it light and funny, not preachy",
      "Post to TikTok and Reels",
      "Engage: Be honest — how many minutes have you scrolled today?",
      "Respond to every comment with humor"
    ],
    hashtags: "#ScrollingVsCreating #DigitalDetox #BloomBoldly #PutThePhoneDown #ColorInstead #ScreenTime #AdultColoringBook #PhoneAddict #CreativeLifestyle #ColorMore"
  },
  {
    day: 28,
    theme: "The Woman I'm Becoming",
    idea: "Identity and growth — personal power post",
    hook: "I'm not who I was five years ago. And five years from now, I'll have bloomed in ways I can't even imagine yet.",
    visual: "Creator, reflective and powerful. Voiceover over coloring footage. Could include a journal page, flowers, soft morning light. Deeply personal and inspiring.",
    caption: "Growth isn't always loud. Sometimes it looks like sitting quietly, choosing yourself, and filling in one petal at a time. 🌷 You're becoming her right now.",
    cta: "Save this. Share this. And if you're ready to invest in the woman you're becoming — link in bio.",
    todo: [
      "Write a personal, vulnerable script about growth and identity",
      "Film with intention — this is a signature piece of content",
      "Post to all platforms",
      "Boost on Facebook",
      "Engage: What's one way you've grown in the last year?"
    ],
    hashtags: "#WomanIAmBecoming #PersonalGrowth #BloomBoldly #GrowthJourney #WomenWhoEvolve #BecomingHer #IdentityAndGrowth #BloomIntoYourself #SelfEvolution #ShesBlossoming"
  },
  {
    day: 29,
    theme: "Build Urgency",
    idea: "This is your sign — stop thinking, start blooming",
    hook: "If you've been thinking about it — this is your sign. Stop thinking. Start blooming.",
    visual: "Creator direct to camera, warm but urgent. Show the book. Maybe a countdown timer graphic. Or a don't miss this styled reel.",
    caption: "There's never a perfect time to start. But there's a RIGHT time. And friend — this is it. 🌺",
    cta: "Grab BLOOM BOLDLY today. Link in bio. Your future self will thank you.",
    todo: [
      "Film a direct, warm but urgent CTA video",
      "Post to all platforms",
      "Run a paid Facebook boost on this post if budget allows",
      "Email your list if you have one",
      "Engage every comment with encouragement"
    ],
    hashtags: "#NowIsTheTime #BloomBoldly #TreatYourself #LastChance #StartNow #YouDeserveThis #AdultColoringBook #BloomNow #NoMoreWaiting #JustStart"
  },
  {
    day: 30,
    theme: "The Grand Finale",
    idea: "Day 30 — Full celebration plus invitation to keep going",
    hook: "30 days ago I put this book into the world. Today, I want to show you what happened.",
    visual: "A beautiful compilation — clips from the last 30 days, customer colored pages, community comments, the book in different settings. Set to an uplifting song. Emotional and celebratory.",
    caption: "30 days. Hundreds of women. Thousands of petals colored. This book found its people — and its people are YOU. I am so proud. I am so grateful. And we're just getting started. 🌸🌺🌻🌷💛",
    cta: "If you've been part of this journey — THANK YOU. If you're just finding us — welcome home. Book link in bio. Let's bloom together.",
    todo: [
      "Compile your best clips from the past 30 days",
      "Create a 60-90 second highlight reel",
      "Write a heartfelt caption",
      "Post to ALL platforms simultaneously",
      "Boost on Facebook",
      "Send a thank-you email to your list",
      "Plan Month 2 content strategy"
    ],
    hashtags: "#30DayChallenge #BloomBoldly #Day30 #GrandFinale #ColoringCommunity #ThankYou #WomensCreativeCommunity #BloomTogether #JustGettingStarted #BloomBoldlyForever"
  }
];

export default days;
