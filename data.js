const globalData = {
	afghanistan: {
		name: "Afghanistan",
		continent: "asia",
		status: "red",
		legal: "Illegal (Death Penalty). Strict Sharia law under Taliban rule.",
		travel:
			"Extreme Risk. All travel is strongly advised against for LGBTQ+ individuals.",
		culture:
			"Identities are entirely underground; no public visibility or safe spaces exist.",
		health:
			"Extremely dangerous; healthcare often requires gender-conforming behavior.",
		posture: "Extremely Hostile - Maximum monitoring advised.",
	},
	albania: {
		name: "Albania",
		continent: "europe",
		status: "yellow",
		legal:
			"Legal. Anti-discrimination laws in place, but no marriage equality.",
		travel:
			"Generally safe in Tirana. Discretion is advised in rural or mountainous regions.",
		culture:
			"Socially conservative but evolving; the 'Tirana Pride' event is a growing landmark.",
		health: "Basic inclusive care in Tirana; high social stigma elsewhere.",
		posture: "Slowly improving; Council of Europe monitoring.",
	},
	algeria: {
		name: "Algeria",
		continent: "africa",
		status: "red",
		legal: "Illegal. Imprisonment and fines under Penal Code.",
		travel:
			"High Risk. Public displays of affection (PDA) can lead to arrest or harassment.",
		culture:
			"Heavily influenced by traditional and religious norms; no legal LGBTQ+ NGOs allowed.",
		health: "Stigmatized; risk of being reported by state medical staff.",
		posture: "Hostile.",
	},
	andorra: {
		name: "Andorra",
		continent: "europe",
		status: "green",
		legal: "Same-sex marriage legal since 2023.",
		travel:
			"Very Safe. Small, welcoming mountain nation with high standards of safety.",
		culture:
			"Deeply integrated with Western European values; very high social acceptance.",
		health: "Universal access; high level of privacy.",
		posture: "Very stable and friendly.",
	},
	anguilla: {
		name: "Anguilla",
		continent: "americas",
		status: "green",
		legal: "Legal since 2001. No same-sex marriage yet.",
		travel:
			"Safe for tourists. Resorts are generally very inclusive and professional.",
		culture:
			"Polite and quiet; the community is small but largely unbothered by tourism.",
		health: "Basic medical; generally inclusive for tourists.",
		posture: "Stable - UK Overseas Territory status.",
	},
	angola: {
		name: "Angola",
		continent: "africa",
		status: "yellow",
		legal: "Decriminalized in 2021; discrimination is prohibited.",
		travel:
			"Caution advised. While legal, public acceptance is still catching up to the law.",
		culture:
			"The local group 'Iris Angola' is leading a brave push for social visibility.",
		health:
			"Emerging support groups in Luanda; HIV/AIDS care is the most inclusive sector.",
		posture: "Developing - Legislative progress made.",
	},
	antigua_barbuda: {
		name: "Antigua & Barbuda",
		continent: "americas",
		status: "green",
		legal:
			"Decriminalized in 2022. Buggery laws were struck down as unconstitutional.",
		travel:
			"Safe and popular tourist destination. Most major resorts are LGBTQ+ friendly.",
		culture:
			"Traditional but respectful; high dependence on tourism encourages a tolerant vibe.",
		health:
			"Professional healthcare with increasing sensitivity to LGBTQ+ travelers.",
		posture: "Improving - Landmark legal victory in the Caribbean.",
	},
	argentina: {
		name: "Argentina",
		continent: "americas",
		status: "green",
		legal:
			"Same-sex marriage legal since 2010. Pioneer in Gender Identity laws.",
		travel:
			"Extremely Safe. Buenos Aires is often called the 'Gay Capital of Latin America'.",
		culture:
			"Vibrant, political, and highly visible. Queer culture is woven into the arts and nightlife.",
		health:
			"Free access to gender-affirming care and inclusive public health services.",
		posture: "Very Stable - Global leader in LGBTQ+ rights.",
	},
	"antigua-and-barbuda": {
		name: "Antigua and Barbuda",
		continent: "americas",
		status: "green",
		legal:
			"Decriminalized in 2022. The High Court struck down colonial-era 'buggery' laws as unconstitutional.",
		travel:
			"Safe for tourists. Major resorts are highly inclusive; public life is respectful but conservative.",
		culture:
			"Traditional Caribbean values; however, the legal shift has led to increased quiet acceptance in tourism hubs.",
		health:
			"Standard medical facilities; practitioners in the tourism sector are generally professional and non-discriminatory.",
		posture: "Improving - Significant legal progress in recent years.",
	},
	argentina: {
		name: "Argentina",
		continent: "americas",
		status: "green",
		legal:
			"Marriage equality since 2010. Pioneer in Gender Identity laws allowing self-identification.",
		travel:
			"Extremely Safe. Buenos Aires remains one of the world's premier LGBTQ+ travel destinations.",
		culture:
			"Highly visible and politically active community. Queer culture is deeply integrated into arts, tango, and nightlife.",
		health:
			"World-class healthcare; public system provides free gender-affirming care and inclusive HIV services (PrEP/ART).",
		posture: "Very Stable - A global leader in LGBTQ+ rights.",
	},
	armenia: {
		name: "Armenia",
		continent: "europe",
		status: "yellow",
		legal:
			"Legal since 2003, but no hate crime protections or recognition of same-sex unions.",
		travel:
			"Caution advised. While physical safety is generally high, public displays of affection (PDA) may lead to harassment.",
		culture:
			"Socially conservative; LGBTQ+ life is largely discreet. Local NGOs like 'Pink Armenia' provide vital safe spaces.",
		health:
			"Limited specialized support; discrimination in healthcare settings is still reported by local activists.",
		posture: "Stagnant - High social stigma despite legal status.",
	},
	aruba: {
		name: "Aruba",
		continent: "americas",
		status: "green",
		legal:
			"Same-sex marriage legalized in July 2024 following a landmark ruling by the Dutch Caribbean Court of Justice.",
		travel:
			"Very Safe. One of the most LGBTQ-friendly islands in the Caribbean; high standard of safety for all travelers.",
		culture:
			"Open and welcoming 'One Happy Island' vibe; mirrors the progressive social standards of the Netherlands.",
		health:
			"Highly inclusive healthcare system; professional and respectful medical services for residents and tourists.",
		posture: "Very Stable - Recent full legal equality achieved.",
	},
	australia: {
		name: "Australia",
		continent: "oceania",
		status: "green",
		legal:
			"Marriage equality since 2017. Strong federal anti-discrimination protections in place.",
		travel:
			"Very Safe. World-renowned LGBTQ+ hubs in Sydney (Mardi Gras) and Melbourne.",
		culture:
			"Extremely inclusive and diverse; LGBTQ+ people are highly visible in all sectors of public life.",
		health:
			"Extensive inclusive health networks; easy access to PrEP and specialized LGBTQ+ health clinics (e.g., Thorne Harbour).",
		posture: "Very Stable - Deeply rooted social and legal acceptance.",
	},
	austria: {
		name: "Austria",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality since 2019. Comprehensive constitutional protections against discrimination.",
		travel:
			"Very Safe. Vienna is consistently ranked as a top inclusive city for international travelers.",
		culture:
			"Progressive and vibrant; high visibility in urban centers with a long history of LGBTQ+ activism.",
		health:
			"Highly inclusive universal healthcare system; gender-affirming care is accessible and well-regulated.",
		posture: "Very Stable - Strong European standard of equality.",
	},
	azerbaijan: {
		name: "Azerbaijan",
		continent: "asia",
		status: "red",
		legal:
			"Legal since 2000, but authorities frequently use 'public morality' laws to target and detain LGBTQ+ individuals.",
		travel:
			"High Risk. Frequent reports of police entrapment and arbitrary arrests. Avoid all public LGBTQ+ visibility.",
		culture:
			"Extremely hostile social environment; queer life is strictly underground due to fear of state and family violence.",
		health:
			"Very few safe spaces; risk of being outed or mistreated by medical staff in public facilities.",
		posture: "Hostile - Ongoing reports of systemic police harassment.",
	},
	bahamas: {
		name: "Bahamas",
		continent: "americas",
		status: "green",
		legal:
			"Legal since 1991. While social conservatism remains high, there are no laws against same-sex acts.",
		travel:
			"Safe for tourists, especially in major resort areas like Nassau and Paradise Island. Discretion is advised in local residential areas.",
		culture:
			"Vibrant but religious; LGBTQ+ life is mostly private or centered around specific 'circuit' events.",
		health:
			"Private clinics are generally inclusive and professional; public facilities can vary in sensitivity.",
		posture: "Stable - Tourism-driven tolerance.",
	},
	bahrain: {
		name: "Bahrain",
		continent: "asia",
		status: "red",
		legal:
			"Technically decriminalized, but vague 'public morality' and 'indecency' laws are frequently weaponized against the community.",
		travel:
			"High Caution. Public visibility can lead to detention or deportation for 'immoral behavior'.",
		culture:
			"Discreet and underground. Social media is monitored for LGBTQ+ content.",
		health:
			"No specific LGBTQ+ services; practitioners may be bound by conservative state mandates.",
		posture: "Hostile - Legal ambiguity used for targeted enforcement.",
	},
	bangladesh: {
		name: "Bangladesh",
		continent: "asia",
		status: "red",
		legal:
			"Illegal under Section 377. High risk of life imprisonment and significant societal persecution.",
		travel:
			"Dangerous. LGBTQ+ travelers face high risks of harassment and extremist violence.",
		culture:
			"The 'Hijra' community has some legal status, but gay/lesbian identities are heavily stigmatized.",
		health:
			"Underground community health networks only; public healthcare is often a site of discrimination.",
		posture: "Extremely Hostile - Severe lack of state protection.",
	},
	barbados: {
		name: "Barbados",
		continent: "americas",
		status: "green",
		legal:
			"Decriminalized in 2022. Marriage equality is not yet legal, but the 'buggery' law is gone.",
		travel:
			"Safe and welcoming. The island is actively marketing to LGBTQ+ travelers as a inclusive destination.",
		culture:
			"Changing rapidly; local activists are increasingly vocal and visible in the media.",
		health:
			"Improving access to inclusive care; HIV/AIDS services are highly professional and supportive.",
		posture: "Improving - A regional benchmark for progress.",
	},
	belarus: {
		name: "Belarus",
		continent: "europe",
		status: "red",
		legal:
			"Legal, but state-led 'propaganda' bans (similar to Russia) make visibility a criminal act.",
		travel:
			"High Risk. Authorities actively raid LGBTQ+ gatherings; state surveillance is pervasive.",
		culture:
			"Severely suppressed. Most safe spaces have been shuttered by the government.",
		health:
			"Significant stigma in medical settings; medical records may not be private from the state.",
		posture: "Hostile - Aligned with repressive regional 'morality' laws.",
	},
	belgium: {
		name: "Belgium",
		continent: "europe",
		status: "green",
		legal:
			"Top-tier rights. One of the first countries to legalize marriage (2003) and adoption.",
		travel: "Very Safe. Brussels and Antwerp are world-class inclusive cities.",
		culture:
			"Extremely progressive; LGBTQ+ people hold high offices in government.",
		health:
			"Comprehensive and specialized LGBTQ+ centers; world-leading gender-affirming care.",
		posture: "Very Stable - Global leader in equality.",
	},
	belize: {
		name: "Belize",
		continent: "americas",
		status: "yellow",
		legal: "Decriminalized in 2016 following a landmark Supreme Court case.",
		travel:
			"Safe in tourist hubs like Ambergris Caye, but social attitudes in rural areas remain mixed.",
		culture:
			"Conservative but polite; the influence of the church remains strong in local politics.",
		health:
			"Limited specialized care; most inclusive services are provided by NGOs like UNIBAM.",
		posture: "Developing - Judicial progress leading social change.",
	},
	benin: {
		name: "Benin",
		continent: "africa",
		status: "yellow",
		legal:
			"Never criminalized, but there is a distinct lack of protective or anti-discrimination laws.",
		travel:
			"Caution advised. Public displays of affection (PDA) are generally discouraged for all, but specifically for same-sex couples.",
		culture:
			"Quiet and private. There is no active state persecution, but social acceptance is low.",
		health:
			"Minimal specialized resources; general healthcare is accessible but not sensitized.",
		posture: "Neutral/Developing - Stable but low visibility.",
	},
	bermuda: {
		name: "Bermuda",
		continent: "americas",
		status: "yellow",
		legal:
			"Legal but complex. Marriage is protected by the UK Privy Council, and discrimination is prohibited.",
		travel:
			"Safe. As of Feb 2026, the atmosphere is 'don't ask, don't tell'. Resorts are very professional.",
		culture:
			"A conservative island society where private lives are respected, but public advocacy can be polarizing.",
		health:
			"High-quality but expensive; discreet care is available at the Hamilton Health Centre.",
		posture:
			"Cautious - Monitoring shows a stable but non-vocal social environment.",
	},
	bhutan: {
		name: "Bhutan",
		continent: "asia",
		status: "yellow",
		legal:
			"Decriminalized in 2021. The change was led by the government as a move toward modern human rights.",
		travel:
			"Safe and welcoming. The general Buddhist culture is one of non-judgment.",
		culture:
			"Slowly emerging visibility. The youth in Thimphu are increasingly open on social media.",
		health:
			"Developing healthcare support; the Ministry of Health has begun sensitizing staff.",
		posture: "Improving - Compassion-based social transition.",
	},
	bolivia: {
		name: "Bolivia",
		continent: "americas",
		status: "yellow",
		legal:
			"Constitutional protection against discrimination exists, though implementation is inconsistent.",
		travel:
			"Generally safe. Major cities are accommodating, though rural indigenous areas are traditional.",
		culture:
			"A mix of traditional values and a strong, grass-roots activist movement (e.g., Mujeres Creando).",
		health:
			"Public health system can be inconsistent; specialized care is mostly found in private urban clinics.",
		posture: "Developing - Strong legal text but slow social enforcement.",
	},
	"bosnia-and-herzegovina": {
		name: "Bosnia and Herzegovina",
		continent: "europe",
		status: "yellow",
		legal:
			"Legal. Anti-discrimination laws exist, but enforcement in the workplace is rare.",
		travel:
			"Caution advised. PDA may attract hostility. Sarajevo is the safest area for travelers.",
		culture:
			"Divided. Urban youth are progressive, but religious and nationalist groups remain hostile to Pride.",
		health:
			"Support mostly found in Sarajevo through organizations like the Sarajevo Open Centre.",
		posture:
			"Slowly Improving - Pride events now occur but require heavy security.",
	},
	botswana: {
		name: "Botswana",
		continent: "africa",
		status: "green",
		legal:
			"Decriminalized in 2019. A landmark case for the continent that affirmed the right to privacy.",
		travel:
			"Safe. One of the most stable and tolerant environments in Southern Africa.",
		culture:
			"Respectful and increasingly open. LEGABIBO is a major force for cultural education.",
		health:
			"Increasingly inclusive public health; high standards for HIV and general care.",
		posture: "Stable - A regional leader in African LGBTQ+ rights.",
	},
	brazil: {
		name: "Brazil",
		continent: "americas",
		status: "green",
		legal:
			"Marriage equality legal since 2013. Homophobia and transphobia are specific criminal offenses.",
		travel:
			"Contradictory. Very safe in LGBTQ+ districts of São Paulo/Rio, but high risk in certain suburbs/rural areas.",
		culture:
			"Massive visibility. Home to the world's largest Pride festivals and vibrant queer media.",
		health:
			"Large network of specialized clinics; SUS (public health) provides free gender-affirming care.",
		posture: "Stable - Strong legal protections despite social polarization.",
	},
	brunei: {
		name: "Brunei",
		continent: "asia",
		status: "red",
		legal:
			"Strict Sharia law. Same-sex acts are technically punishable by death (though currently under moratorium).",
		travel:
			"High Risk. Total discretion is mandatory. Any discussion of LGBTQ+ rights is illegal.",
		culture:
			"Non-existent in public. The community is entirely invisible for safety.",
		health:
			"No LGBTQ+ services; seeking help for identity-related issues carries extreme legal risk.",
		posture: "Extremely Hostile - Maximum state monitoring.",
	},
	bulgaria: {
		name: "Bulgaria",
		continent: "europe",
		status: "yellow",
		legal:
			"Legal since 1968, but marriage is constitutionally defined as between a man and a woman.",
		travel:
			"Safe in Sofia and coastal resorts. Caution is advised in smaller towns regarding PDA.",
		culture:
			"Socially conservative; Sofia Pride is the main point of visibility but faces annual protests.",
		health:
			"Reliable healthcare in Sofia; private clinics are generally professional.",
		posture:
			"Stagnant - EU membership provides a baseline of protection but social growth is slow.",
	},
	"burkina-faso": {
		name: "Burkina Faso",
		continent: "africa",
		status: "red",
		legal:
			"CRITICAL: Criminalized in 2025. New laws impose prison terms for same-sex acts and any form of 'promotion'.",
		travel:
			"Extremely Dangerous. High risk of state-led arrest and community-led violence.",
		culture:
			"Rapidly deteriorating; NGOs have been forced to cease operations for safety.",
		health:
			"Significant risk of discrimination and reporting in state medical facilities.",
		posture:
			"Hostile - Rapidly deteriorating legal and security climate (Feb 2026).",
	},
	burundi: {
		name: "Burundi",
		continent: "africa",
		status: "red",
		legal:
			"Criminalized since 2009. President Ndayishimiye has recently used violently homophobic rhetoric.",
		travel:
			"Extremely Dangerous. Current political climate treats LGBTQ+ identity as a 'curse' or 'treason'.",
		culture:
			"Active persecution. In Feb 2026, safety reached an all-time low following presidential calls for stoning.",
		health:
			"CRITICAL: MUCO Burundi (HIV NGO) has been targeted in raids. Underground networks are the only safe option.",
		posture:
			"Extremely Hostile - Highest level of danger currently reported in East Africa.",
	},
	"cabo-verde": {
		name: "Cabo Verde",
		continent: "africa",
		status: "green",
		legal:
			"One of Africa's most progressive nations. Decriminalized since 2004 with strong anti-discrimination laws.",
		travel:
			"Very Safe. A welcoming destination for LGBTQ+ tourists, particularly in Sal and Boa Vista.",
		culture:
			"Open and tolerant; the 'Mindelo Pride' on São Vicente is a vibrant annual highlight.",
		health:
			"Inclusive clinics are available; healthcare providers are generally trained in non-discriminatory practice.",
		posture: "Stable - A regional beacon for human rights.",
	},
	cambodia: {
		name: "Cambodia",
		continent: "asia",
		status: "yellow",
		legal:
			"No laws criminalizing same-sex acts. No legal recognition of marriage, but 'Declaration of Family Relationship' is possible in some areas.",
		travel:
			"Safe. Phnom Penh and Siem Reap have thriving, visible LGBTQ+ scenes with many queer-owned businesses.",
		culture:
			"Culturally tolerant based on Buddhist principles; 'Pride Cambodia' is celebrated annually with increasing support.",
		health:
			"Good support in Phnom Penh via NGOs like KHANA; general healthcare is respectful but lacks specialization.",
		posture: "Improving - Social acceptance is outpacing the law.",
	},
	cameroon: {
		name: "Cameroon",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Section 347-1 penalizes same-sex acts with up to 5 years imprisonment. Active state-led prosecution.",
		travel:
			"Dangerous. High risk of arbitrary arrest, 'physical examinations' by police, and community mob violence.",
		culture:
			"Extremely hostile; social media is often used by 'vigilantes' to out and target LGBTQ+ individuals.",
		health:
			"High risk of discrimination; some medical staff are known to report patients to the authorities.",
		posture: "Hostile - Systemic state and social persecution.",
	},
	canada: {
		name: "Canada",
		continent: "americas",
		status: "green",
		legal:
			"Global leader. Full marriage equality since 2005 and comprehensive federal protections for gender identity.",
		travel:
			"Very Safe. Some of the most inclusive cities in the world (Toronto, Vancouver, Montreal).",
		culture:
			"LGBTQ+ identity is a core part of the national fabric; massive public funding for queer arts and community centers.",
		health:
			"Highly specialized, universal inclusive care; world-leading gender-affirming surgery and hormone therapy access.",
		posture: "Very Stable - Global gold standard for rights.",
	},
	"central-african-republic": {
		name: "Central African Republic",
		continent: "africa",
		status: "red",
		legal:
			"Technically legal, but there are zero protective laws and same-sex couples have no rights.",
		travel:
			"Extremely Dangerous. High levels of civil conflict and lawlessness make the country unsafe for all, but specifically targets for LGBTQ+ people.",
		culture:
			"Invisible for survival; the ongoing humanitarian crisis has erased any public safe spaces.",
		health:
			"Non-existent specialized care; general medical infrastructure is severely depleted by conflict.",
		posture:
			"Hostile - Dangerous due to instability and lack of state protection.",
	},
	chad: {
		name: "Chad",
		continent: "africa",
		status: "red",
		legal:
			"Criminalized in 2017. Penalties include prison time and heavy fines for 'indecency'.",
		travel:
			"Dangerous. High social stigma and risk of arrest. Total discretion is required.",
		culture:
			"Strictly conservative society; no public LGBTQ+ organizations or events are permitted.",
		health:
			"No LGBTQ+ specific resources; high risk of being outed if seeking related medical help.",
		posture: "Hostile - Recent legislative shift toward criminalization.",
	},
	chile: {
		name: "Chile",
		continent: "americas",
		status: "green",
		legal:
			"Full marriage equality since 2022. Progressive gender identity laws allow for administrative name/sex changes.",
		travel:
			"Very Safe. Santiago has a very high concentration of LGBTQ+ friendly neighborhoods and nightlife.",
		culture:
			"Deeply engaged and visible; the 'Movilh' organization is one of the most successful activists groups in South America.",
		health:
			"Excellent inclusive healthcare; strong public and private networks for gender-affirming care.",
		posture: "Very Stable - Rapidly modernized legal framework.",
	},
	china: {
		name: "China",
		continent: "asia",
		status: "red",
		legal:
			"Legal since 1997, but no marriage rights. Increasing use of 'public order' laws to shut down community events.",
		travel:
			"Caution advised. While physical safety is high in cities, LGBTQ+ venues are being closed by authorities. Avoid political activism.",
		culture:
			"Shrinking safe spaces. Censorship of 'effeminate' or 'queer' content in media and on social platforms (Weibo/WeChat) is high.",
		health:
			"Specialized care is being restricted; several university-linked LGBTQ+ health centers were closed in 2023-2024.",
		posture:
			"Hostile - Increasing state-led social 'cleansing' of queer visibility.",
	},
	colombia: {
		name: "Colombia",
		continent: "americas",
		status: "yellow",
		legal:
			"Very strong legal rights (Marriage since 2016). Constitutional court is highly progressive.",
		travel:
			"Safe in Bogotá, Medellín, and Cartagena. Caution is advised in rural areas where 'social cleansing' by armed groups still occurs.",
		culture:
			"Vibrant and resilient; Bogotá's 'Theatron' is the largest gay club in the world. High visibility in politics.",
		health:
			"Great inclusive care in major cities; 'Pares' and other NGOs provide excellent community health support.",
		posture:
			"Volatile - Legal progress is strong, but rural security remains a concern.",
	},
	comoros: {
		name: "Comoros",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Penalties include up to 5 years imprisonment. Heavily influenced by strict religious interpretations.",
		travel:
			"High Risk. Public displays of affection are dangerous. Total discretion is mandatory.",
		culture:
			"Entirely underground; social and family pressure to conform is extreme.",
		health:
			"No specialized resources; seeking care for LGBTQ+ related issues is socially and legally risky.",
		posture: "Hostile - Strict religious and legal enforcement.",
	},
	congo: {
		name: "Congo",
		continent: "africa",
		status: "yellow",
		legal:
			"Legal. Same-sex acts were never specifically criminalized, but there is zero legal recognition.",
		travel:
			"Caution advised. Physical safety is generally okay in Brazzaville, but social stigma is pervasive.",
		culture:
			"Low visibility; community life is centered around private homes and discreet social circles.",
		health:
			"Minimal support; some HIV/AIDS NGOs provide 'non-judgmental' general care.",
		posture: "Neutral/Stagnant - Lack of progress or active persecution.",
	},
	"cook-islands": {
		name: "Cook Islands",
		continent: "oceania",
		status: "green",
		legal:
			"Decriminalized in 2023. The historic 'Crimes Act' reform removed penalties for same-sex acts.",
		travel:
			"Safe and welcoming. A popular and beautiful inclusive destination for couples.",
		culture:
			"The 'Te Tiare Association' is the leading voice for the 'Akava'ine' (transgender/third gender) community.",
		health: "Small but welcoming healthcare community; high levels of privacy.",
		posture: "Improving - Recent landmark decriminalization.",
	},
	"costa-rica": {
		name: "Costa Rica",
		continent: "americas",
		status: "green",
		legal:
			"Marriage equality legal since 2020. Central America's most progressive nation for rights.",
		travel:
			"Very Safe. San José and beach towns like Manuel Antonio are world-famous LGBTQ+ hubs.",
		culture:
			"The 'Pura Vida' spirit translates to a high degree of social tolerance and visible pride.",
		health:
			"Robust and inclusive medical system (Caja); high standards of care for all residents and tourists.",
		posture: "Very Stable - Regional leader in tourism and equality.",
	},
	croatia: {
		name: "Croatia",
		continent: "europe",
		status: "green",
		legal:
			"Life partnership (similar to marriage) is legal. Adoption rights were affirmed in 2022.",
		travel:
			"Safe. Zagreb Pride is large and peaceful. Coastal areas are generally very welcoming to tourists.",
		culture:
			"Culturally Catholic but increasingly secular and progressive in urban centers.",
		health:
			"Generally inclusive in cities; private clinics are modern and sensitized to queer patients.",
		posture: "Stable - Strong European alignment on rights.",
	},
	cuba: {
		name: "Cuba",
		continent: "americas",
		status: "yellow",
		legal:
			"The 2022 Family Code legalized same-sex marriage and adoption after a national referendum.",
		travel:
			"Safe. CENESEX (led by Mariela Castro) has created a state-sanctioned space for LGBTQ+ travelers.",
		culture:
			"Unique; a mix of state-led 'inclusion' and traditional Machismo. Public Pride marches are government-organized.",
		health:
			"State-run LGBTQ+ health programs are some of the most specialized in the Caribbean.",
		posture: "Developing - Significant top-down legal progress.",
	},
	curacao: {
		name: "Curaçao",
		continent: "americas",
		status: "green",
		legal:
			"Same-sex marriage legalized in July 2024 following a Dutch Supreme Court ruling affecting the Caribbean territories.",
		travel:
			"Safe and stable. The island has a sophisticated, inclusive tourism infrastructure.",
		culture:
			"Multicultural and open; mirrors the social progress of the Netherlands while maintaining Caribbean charm.",
		health:
			"Inclusive care available in Willemstad; mirrors Dutch standards of privacy and professionalism.",
		posture: "Very Stable - Full legal equality recently secured.",
	},
	cyprus: {
		name: "Cyprus",
		continent: "europe",
		status: "green",
		legal:
			"Civil unions are legal since 2015. Anti-discrimination laws protect employment and services.",
		travel:
			"Safe. The southern Republic is very welcoming. (Note: The northern territory is more conservative).",
		culture:
			"Fast-changing; 'Accept-LGBT Cyprus' is a powerful force for social change in the Mediterranean.",
		health:
			"Good standard of inclusive care; high degree of privacy in the private medical sector.",
		posture: "Stable - Steady progress toward European norms.",
	},
	czechia: {
		name: "Czechia",
		continent: "europe",
		status: "green",
		legal:
			"Civil unions expanded in Jan 2025 ('Partnership'). Mandatory surgery for legal gender recognition was abolished in 2024.",
		travel:
			"Very Safe. Prague is one of the most 'gay-friendly' cities in Eastern Europe.",
		culture:
			"Secular and progressive; very high visibility for LGBTQ+ life in media and nightlife.",
		health:
			"Access to gender-affirming care has been significantly simplified under new 2025 guidelines.",
		posture: "Progressive - Closing the gap toward full marriage equality.",
	},
	denmark: {
		name: "Denmark",
		continent: "europe",
		status: "green",
		legal:
			"A global pioneer; first country to recognize same-sex partnerships (1989). Full marriage equality since 2012.",
		travel:
			"Extremely Safe. Copenhagen is consistently ranked as one of the most LGBTQ-friendly cities in the world.",
		culture:
			"Extremely progressive and visible; 'Copenhagen Pride' and 'WorldPride' history showcase deep social integration.",
		health:
			"Global standard for inclusive care; specialized clinics for gender-affirming care and sexual health are easily accessible.",
		posture: "Very Stable - Global leader in human rights.",
	},
	djibouti: {
		name: "Djibouti",
		continent: "africa",
		status: "red",
		legal:
			"Technically legal (no specific law against same-sex acts), but 'public morality' laws are used for enforcement.",
		travel:
			"High Risk. Socially and culturally strictly forbidden. LGBTQ+ travelers must practice absolute discretion.",
		culture:
			"Entirely underground; the influence of conservative religious and social norms makes visibility impossible.",
		health:
			"No LGBTQ+ specific resources; high risk of social stigma if identity is disclosed to medical staff.",
		posture: "Hostile - Legal silence does not equate to safety.",
	},
	dominica: {
		name: "Dominica",
		continent: "americas",
		status: "green",
		legal:
			"Decriminalized in April 2024. The High Court struck down the 'buggery' and 'indecent assault' laws.",
		travel:
			"Safe and improving. Known as the 'Nature Isle,' it is becoming a more attractive destination for inclusive travel.",
		culture:
			"Traditional but evolving; the legal victory has empowered local advocates like MiRiDom to increase visibility.",
		health:
			"Limited specialized support; however, the legal shift is expected to improve sensitivity in public health.",
		posture: "Improving - Recent landmark decriminalization.",
	},
	"dominican-republic": {
		name: "Dominican Republic",
		continent: "americas",
		status: "yellow",
		legal:
			"Legal, but same-sex marriage is constitutionally banned and anti-discrimination protections are weak.",
		travel:
			"Safe in tourist zones (Punta Cana, Santo Domingo). Caution is advised in rural areas where 'machismo' is prevalent.",
		culture:
			"Vibrant but contradictory; large Pride events in the capital contrast with high levels of social stigma in the interior.",
		health:
			"Safe in tourist zones and private clinics; public facilities can be inconsistent in their sensitivity.",
		posture:
			"Stagnant - High visibility in tourism, but slow domestic progress.",
	},
	ecuador: {
		name: "Ecuador",
		continent: "americas",
		status: "green",
		legal:
			"Marriage equality legal since 2019. Constitution explicitly protects against discrimination based on sexual orientation.",
		travel:
			"Safe. Quito and Cuenca are generally welcoming; the 'Pink Sector' in Mariscal (Quito) is very active.",
		culture:
			"Increasingly progressive; local organizations like 'Silueta X' are very active in trans and queer rights.",
		health:
			"Inclusive clinics available in major cities; public health guidelines mandate non-discriminatory care.",
		posture: "Stable - Strong legal framework in place.",
	},
	egypt: {
		name: "Egypt",
		continent: "africa",
		status: "red",
		legal:
			"Technically legal but de facto criminalized. 'Debauchery' and 'Public Morality' laws are used for systemic crackdowns.",
		travel:
			"Extremely Dangerous. Authorities use dating apps (Grindr/Scruff) for entrapment and arbitrary arrests.",
		culture:
			"Severely suppressed; social media and private gatherings are actively monitored by state security.",
		health:
			"High entrapment risk; medical settings have been used to perform 'forced examinations' and report individuals.",
		posture: "Extremely Hostile - Active state-led persecution.",
	},
	"el-salvador": {
		name: "El Salvador",
		continent: "americas",
		status: "red",
		legal:
			"Legal, but no recognition of same-sex unions. Anti-discrimination laws are largely ignored.",
		travel:
			"High Risk. While the general security situation has changed, hate crimes against trans people remain critically high.",
		culture:
			"Highly religious and conservative; LGBTQ+ life is centered around a few brave urban activist groups.",
		health:
			"NGO-led support only; state facilities are often sites of intense discrimination and harassment.",
		posture:
			"Hostile - High levels of targeted violence and zero state protection.",
	},
	"equatorial-guinea": {
		name: "Equatorial Guinea",
		continent: "africa",
		status: "red",
		legal:
			"Legal, but same-sex couples have no rights or recognition. Harassment under 'public scandal' laws is common.",
		travel:
			"High Risk. Total discretion is required. High levels of state surveillance for all foreign visitors.",
		culture:
			"Invisible; social stigma is so high that no public LGBTQ+ community life is documented.",
		health:
			"No resources; medical infrastructure is generally limited and non-sensitized to LGBTQ+ needs.",
		posture: "Hostile - Repressive social and political climate.",
	},
	eritrea: {
		name: "Eritrea",
		continent: "africa",
		status: "red",
		legal:
			"Strictly illegal. Penalties include imprisonment and there are frequent reports of 'disappearances' of activists.",
		travel:
			"Extremely Dangerous. Total state control and severe criminal penalties make travel high-risk for LGBTQ+ people.",
		culture:
			"Non-existent in public. Total silence is maintained for survival due to fear of state informants.",
		health:
			"No resources; health facilities are state-controlled and provide no privacy or safety for the community.",
		posture: "Extremely Hostile - Maximum state repression.",
	},
	estonia: {
		name: "Estonia",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality legal since January 1, 2024. First Baltic nation to achieve full legal equality.",
		travel:
			"Very Safe. Tallinn is a modern, secular, and highly inclusive capital for international travelers.",
		culture:
			"Fast-changing; the 'vibe' is now firmly aligned with Nordic standards of social tolerance and visibility.",
		health:
			"Highly inclusive universal healthcare; gender-affirming care is available and legally protected.",
		posture: "Very Stable - Historic recent progress.",
	},
	eswatini: {
		name: "Eswatini",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Same-sex acts remain criminalized under colonial-era laws; the government has refused to register LGBTQ+ NGOs.",
		travel:
			"High Risk. Public advocacy or visibility can lead to arrest or harassment from traditional authorities.",
		culture:
			"Extremely conservative; Pride events have been banned or restricted by the police in recent years.",
		health:
			"Minimal resources; some discreet HIV support exists but general healthcare is not sensitized.",
		posture: "Hostile - Active resistance to legal reform.",
	},
	ethiopia: {
		name: "Ethiopia",
		continent: "africa",
		status: "red",
		legal:
			"Strictly illegal. Penal code mandates prison terms. The 2023-2024 'morality' crackdowns in Addis Ababa increased danger.",
		travel:
			"Extremely Dangerous. High risk of mob violence and police raids. Authorities have called for the reporting of LGBTQ+ individuals.",
		culture:
			"Deeply religious and hostile social environment; queer life is strictly underground to avoid lynching or arrest.",
		health:
			"No resources; seeking care carries a high risk of being reported to the police or family.",
		posture: "Extremely Hostile - Severe social and state-led persecution.",
	},
	fiji: {
		name: "Fiji",
		continent: "oceania",
		status: "yellow",
		legal:
			"Constitution (2013) bans discrimination based on sexual orientation. Marriage is not yet legal.",
		travel:
			"Safe in major resorts and Suva. Caution is advised regarding PDA in traditional village settings.",
		culture:
			"Culturally diverse; the 'vaka sa lewa lewa' (third gender) have a long-standing traditional place in society.",
		health:
			"Reliable and professional care in Suva; private clinics are generally inclusive and respectful.",
		posture: "Stable - Constitutional protection provides a strong baseline.",
	},
	finland: {
		name: "Finland",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality since 2017. In 2023, the 'Trans Act' was reformed to allow self-determination for gender recognition.",
		travel:
			"Very Safe. Helsinki is a global leader in inclusive urban design and safety.",
		culture:
			"Extremely inclusive; high social visibility and strong support from both the state and the Lutheran church.",
		health:
			"Excellent inclusive care; world-class gender-affirming services and comprehensive sexual health networks.",
		posture: "Very Stable - Consistent global leader.",
	},
	france: {
		name: "France",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality since 2013. Banned 'conversion therapy' in 2022. Strong anti-discrimination laws since 1985.",
		travel:
			"Very Safe. Paris (Le Marais) and Nice are premier global destinations for the LGBTQ+ community.",
		culture:
			"Deeply historical and vibrant queer culture; high visibility in all aspects of cinema, politics, and daily life.",
		health:
			"Extensive inclusive health network; gender-affirming care is fully integrated into the national health system.",
		posture: "Very Stable - Deeply rooted social and legal equality.",
	},
	gabon: {
		name: "Gabon",
		continent: "africa",
		status: "yellow",
		legal:
			"Decriminalized in 2020. Gabon reversed a short-lived ban, returning to a status of no specific criminal laws.",
		travel:
			"Caution advised. While legal, public acceptance is very low. Discretion is recommended for all travelers.",
		culture:
			"Quiet and discreet; there is no organized public Pride movement, but private social circles exist in Libreville.",
		health:
			"Developing support; some HIV NGOs provide sensitized general healthcare services in the capital.",
		posture: "Neutral/Improving - Positive legislative reversal in 2020.",
	},
	gambia: {
		name: "Gambia",
		continent: "africa",
		status: "red",
		legal:
			"Strictly illegal. 'Aggravated homosexuality' carries a sentence of life imprisonment.",
		travel:
			"Dangerous. Authorities have historically used aggressive rhetoric and entrapment. Absolute discretion required.",
		culture:
			"Highly hostile; LGBTQ+ individuals often flee to neighboring Senegal for safety.",
		health:
			"No resources; seeking care carries a severe risk of state-led reporting and imprisonment.",
		posture: "Extremely Hostile - Maximum legal penalties in place.",
	},
	georgia: {
		name: "Georgia",
		continent: "red",
		legal:
			"Legal since 2000, but in 2024-2025, the government passed Russian-style 'Anti-Propaganda' laws.",
		travel:
			"High Risk. Pride events in Tbilisi are frequently attacked by violent groups with little police protection.",
		culture:
			"Polarized; a brave urban youth culture exists, but is under siege from state-backed conservative and religious groups.",
		health:
			"NGO support available in Tbilisi (Tbilisi Pride / Equality Movement); state facilities are increasingly hostile.",
		posture:
			"Hostile - Rapidly deteriorating environment due to 'propaganda' bans (Feb 2026).",
	},
	germany: {
		name: "Germany",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality since 2017. Self-Determination Act (2024) allows for easy change of gender marker.",
		travel:
			"Very Safe. Berlin and Cologne are legendary for their inclusive culture and nightlife.",
		culture:
			"Vibrant, historic, and diverse. LGBTQ+ rights are a key part of the modern German identity.",
		health:
			"Highly specialized clinics nationwide; gender-affirming care and PrEP are standard parts of the healthcare system.",
		posture: "Very Stable - Global center for queer history and rights.",
	},
	ghana: {
		name: "Ghana",
		continent: "africa",
		status: "red",
		legal:
			"CRITICAL: The 'Human Sexual Rights and Family Values Bill' was passed in early 2024 and enforced into 2026.",
		travel:
			"Extremely Dangerous. Promoting LGBTQ+ rights or providing inclusive healthcare is now a criminal offense.",
		culture:
			"Extremely Hostile. High risk of mob violence and state-led 'vigilante' reporting. Safe spaces have been shut down.",
		health:
			"Extremely restricted; providers risk prison for treating LGBTQ+ patients without reporting them.",
		posture:
			"Extremely Hostile - Severe state-led crackdown and surveillance (Feb 2026).",
	},
	greece: {
		name: "Greece",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality and adoption rights legalized in February 2024. First Orthodox Christian nation to do so.",
		travel:
			"Very Safe. Athens and Mykonos remain some of the world's most welcoming destinations.",
		culture:
			"Socially evolving; the recent legal victory has sparked a massive shift in public visibility and acceptance.",
		health:
			"Strong support in Athens and Thessaloniki; specialized LGBTQ+ health clinics are modern and professional.",
		posture: "Very Stable - Recent historic leap in equality.",
	},
	grenada: {
		name: "Grenada",
		continent: "americas",
		status: "yellow",
		legal:
			"Technically illegal (same-sex acts between men), but the law is rarely enforced against tourists.",
		travel:
			"Safe for tourists. Resorts are professional, but discretion is advised in local towns.",
		culture:
			"Quietly conservative; the community is small and social life is generally very private.",
		health:
			"Basic care available; medical professionals in the tourism sector are generally non-discriminatory.",
		posture:
			"Stagnant - Legal reform is being discussed but not yet implemented.",
	},
	guatemala: {
		name: "Guatemala",
		continent: "americas",
		status: "yellow",
		legal:
			"Legal, but 'Protection of Life and Family' bills frequently threaten to roll back rights and ban inclusive education.",
		travel:
			"Caution advised. High religious opposition to LGBTQ+ visibility. Discretion is recommended outside Guatemala City.",
		culture:
			"Socially conservative; trans individuals face high rates of discrimination and violence.",
		health:
			"Limited specialized care; NGO-led clinics (e.g., CAS) are the primary source of safe support.",
		posture:
			"Volatile - Frequent legislative attempts to criminalize visibility.",
	},
	guinea: {
		name: "Guinea",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Penalties include 6 months to 3 years imprisonment. High risk of state harassment.",
		travel:
			"High Risk. Total discretion is required. LGBTQ+ travelers should avoid any form of public visibility.",
		culture:
			"Hostile and private; social and religious pressure to conform is intense.",
		health:
			"No resources; seeking identity-related healthcare carries a high risk of social outing.",
		posture: "Hostile - Strict legal and social enforcement.",
	},
	"guinea-bissau": {
		name: "Guinea-Bissau",
		continent: "africa",
		status: "yellow",
		legal:
			"Legal since 1993, but there are no laws protecting against discrimination.",
		travel:
			"Caution advised. While not illegal, social acceptance is extremely low and visibility is not recommended.",
		culture:
			"Very private; there is no documented public LGBTQ+ community or Pride movement.",
		health:
			"No resources; medical facilities lack awareness or specialized training for the community.",
		posture: "Neutral/Stagnant - Legal status without social protection.",
	},
	guyana: {
		name: "Guyana",
		continent: "americas",
		status: "red",
		legal:
			"Same-sex acts between men remain illegal. In 2018, the cross-dressing ban was struck down, but the 'buggery' law persists.",
		travel:
			"High Risk. High levels of social stigma and occasional reports of harassment. Caution is strongly advised.",
		culture:
			"Conservative Caribbean influence; SASOD Guyana is a very active NGO fighting for legal reform.",
		health:
			"Limited support; SASOD provides sensitized health referrals and legal aid.",
		posture:
			"Stagnant - Last country in South America with active criminal laws.",
	},
	haiti: {
		name: "Haiti",
		continent: "americas",
		status: "red",
		legal:
			"Legal, but there are no protective laws. Same-sex unions are not recognized.",
		travel:
			"Extremely Dangerous. High levels of gang violence and civil instability; LGBTQ+ individuals are often targeted for kidnapping and extortion.",
		culture:
			"Socially conservative; 'Masisi' (gay men) face extreme stigma, though some religious traditions (Voodoo) offer limited spiritual space.",
		health:
			"Dangerous to access care; medical facilities are collapsing due to the national crisis and lack sensitivity.",
		posture:
			"Hostile - Dangerous due to total lack of state protection and high societal violence.",
	},
	honduras: {
		name: "Honduras",
		continent: "americas",
		status: "red",
		legal:
			"Legal since 1899, but marriage and adoption are constitutionally banned. High rates of impunity for hate crimes.",
		travel:
			"High Risk. Honduras has one of the world's highest murder rates for trans individuals. Avoid all public LGBTQ+ visibility.",
		culture:
			"Machismo and religious conservatism dominate; local groups like 'Cattrachas' provide vital monitoring of violence.",
		health:
			"NGO-led support in San Pedro Sula and Tegucigalpa is the only safe option; state clinics are often hostile.",
		posture:
			"Hostile - Extreme levels of targeted violence against the community.",
	},
	hungary: {
		name: "Hungary",
		continent: "europe",
		status: "yellow",
		legal:
			"Registered partnerships are legal, but a 2021 law bans 'displaying or promoting' LGBTQ+ content to minors.",
		travel:
			"Safe for tourists, but avoid political activism. Public displays of affection (PDA) may attract verbal harassment in rural areas.",
		culture:
			"Polarized; Budapest has a resilient and defiant queer scene, but state rhetoric is increasingly exclusionary.",
		health:
			"Stigma in state clinics; private healthcare in Budapest is modern and generally professional.",
		posture: "Volatile - Government actively rolling back social visibility.",
	},
	iceland: {
		name: "Iceland",
		continent: "europe",
		status: "green",
		legal:
			"Full equality since 2010. Consistently ranked as the most LGBTQ-friendly country in the world.",
		travel:
			"Extremely Safe. LGBTQ+ people are welcome everywhere; the country is a global leader in inclusive tourism.",
		culture:
			"Rainbows are visible across the country; 'Reykjavík Pride' is the nation's largest annual event.",
		health:
			"Global gold standard; healthcare is fully inclusive, and gender-affirming care is a standard right.",
		posture: "Very Stable - The global benchmark for safety and rights.",
	},
	india: {
		name: "India",
		continent: "asia",
		status: "yellow",
		legal:
			"Decriminalized in 2018 (Section 377). Marriage equality was denied by the Supreme Court in 2023, but a panel is reviewing 'union rights'.",
		travel:
			"Safe in major cities. Huge LGBTQ+ hubs exist in Mumbai, Delhi, and Bangalore. Caution is advised in rural or religious areas.",
		culture:
			"Vibrant and diverse; the 'Hijra' community has legal 'Third Gender' status. Bollywood and youth culture are rapidly becoming more inclusive.",
		health:
			"Huge community networks (e.g., Humsafar Trust); specialized care is world-class in private urban hospitals.",
		posture:
			"Stable/Improving - Massive social shift despite slow legal progress.",
	},
	indonesia: {
		name: "Indonesia",
		continent: "asia",
		status: "red",
		legal:
			"Legal nationally (except Aceh), but 'anti-pornography' and 'morality' laws are used to raid private spaces and clubs.",
		travel:
			"High Risk. Do not use dating apps in public. Bali remains the only relatively safe and inclusive island for tourists.",
		culture:
			"Increasingly conservative; local authorities frequently target the community to satisfy religious political bases.",
		health:
			"High discrimination risk; seeking care for sexual health can lead to invasive questioning or police reporting.",
		posture: "Hostile - Rising state-sanctioned persecution and raids.",
	},
	iran: {
		name: "Iran",
		continent: "asia",
		status: "red",
		legal:
			"Following the US/Israel strikes this morning, 28th February 2026, the Iranian people have their chance of freedom from this horrific gay-killing regime. Nobody knows the future or how this will impact the gay community in Iran. I am monitoring this closely to provide updates on how this impacts our community. The current situation is extremely dangerous and if you are in Iran you are advised to stay home and take cover. <br><br> Current Status under the IRGC is: Illegal; carries the death penalty for same-sex acts. State policy ignores gay identity while 'promoting' forced surgery for trans people.",
		travel:
			"Extremely Dangerous. Total state surveillance; any form of LGBTQ+ visibility is a capital offense.",
		culture:
			"Strictly underground; a brave but high-risk secret culture exists in major cities under constant threat of execution.",
		health:
			"State-forced gender surgery is often used as a 'cure' for homosexuality; zero safe mental health support.",
		posture: "Extremely Hostile - Maximum state-led violence.",
	},
	iraq: {
		name: "Iraq",
		continent: "asia",
		status: "red",
		legal:
			"CRITICAL: In April 2024, Iraq formally criminalized same-sex relations (up to 15 years prison) and gender transition.",
		travel:
			"Extremely Dangerous. High risk of state arrest and 'honor killings' by extrajudicial militias. Total discretion is vital.",
		culture:
			"Violently suppressed; any public advocacy or rainbow symbols are now criminal acts under new 2024 laws.",
		health:
			"Gender-affirming care is explicitly illegal; high physical risk for healthcare providers who treat LGBTQ+ patients.",
		posture:
			"Extremely Hostile - New 2024 laws have codified extreme persecution.",
	},
	ireland: {
		name: "Ireland",
		continent: "europe",
		status: "green",
		legal:
			"Marriage equality legalized by popular vote in 2015. Strong anti-discrimination and gender recognition laws.",
		travel:
			"Very Safe. Dublin and Cork are exceptionally welcoming; the country is one of the most inclusive in Europe.",
		culture:
			"Deeply progressive; the transformation from a conservative society to a global leader in rights is a point of national pride.",
		health:
			"Excellent inclusive care; national health guidelines prioritize non-discriminatory and specialized LGBTQ+ support.",
		posture: "Very Stable - Deeply rooted social and legal equality.",
	},
	israel: {
		name: "Israel",
		continent: "asia",
		status: "green",
		legal:
			"Middle East leader in rights; same-sex marriages performed abroad are recognized. High protection against discrimination.",
		travel:
			"Safe. Tel Aviv is a world-famous 'gay mecca' with a massive, vibrant inclusive scene.",
		culture:
			"Highly visible and celebrated in Tel Aviv; Jerusalem remains more conservative but hosts peaceful Pride marches.",
		health:
			"Specialized clinics and world-class healthcare; public system is highly sensitized to the LGBTQ+ community.",
		posture: "Stable - Regional beacon for LGBTQ+ safety.",
	},
	italy: {
		name: "Italy",
		continent: "europe",
		status: "green",
		legal:
			"Civil unions legal since 2016. While full marriage is pending, legal protections for LGBTQ+ travelers are high.",
		travel:
			"Safe. Rome, Milan, and Tuscany are very welcoming. PDA is generally accepted in urban and tourist areas.",
		culture:
			"Socially tolerant but influenced by traditional values; Pride events in major cities are massive and festive.",
		health:
			"Reliable care in major cities; private medical sector is modern and professional regarding privacy.",
		posture: "Stable - Strong European standard of safety.",
	},
	"ivory-coast": {
		name: "Ivory Coast",
		continent: "africa",
		status: "yellow",
		legal:
			"Legal (never criminalized). However, same-sex couples have no legal recognition or specific protections.",
		travel:
			"Caution advised. Physical safety is generally high in Abidjan, but social stigma is prevalent in public life.",
		culture:
			"The local LGBTQ+ community is active but discreet; Abidjan has several 'unofficial' safe spaces and clubs.",
		health:
			"NGO support in Abidjan (e.g., Q-Afrique) provides the only sensitized and safe medical support.",
		posture: "Neutral - Stability without legal progress.",
	},
	jamaica: {
		name: "Jamaica",
		continent: "americas",
		status: "red",
		legal:
			"Same-sex acts between men remain illegal under the 'Buggery Law'. High levels of societal homophobia.",
		travel:
			"High Risk. Safe within major gated resorts, but LGBTQ+ visibility outside of tourism areas carries a high risk of violence.",
		culture:
			"Strongly influenced by conservative religious views and 'dancehall' culture which can be hostile to queer identities.",
		health:
			"High stigma in public health; seeking care for related issues often results in harassment or poor treatment.",
		posture: "Hostile - Significant social and legal barriers persist.",
	},
	japan: {
		name: "Japan",
		continent: "asia",
		status: "yellow",
		legal:
			"Legal. Most major cities now issue partnership certificates. A landmark 2024 High Court ruling declared the marriage ban unconstitutional, with a final 2026 decision pending.",
		travel:
			"Very Safe. Tokyo (Shinjuku Ni-chōme) has the highest density of gay bars in the world. Physical violence is extremely rare.",
		culture:
			"Socially tolerant but 'quiet'; the concept of 'coming out' is still evolving in professional and family life.",
		health:
			"Safe but bureaucratic; medical gender transition still requires a psychiatric diagnosis and specific legal hurdles.",
		posture:
			"Improving - Legal system and society are in a major state of transition (Feb 2026).",
	},
	jordan: {
		name: "Jordan",
		continent: "asia",
		status: "red",
		legal:
			"Legal since 1951, but 'public morality' and 'indecency' laws are frequently used for harassment and detention.",
		travel:
			"High Risk. Total discretion is mandatory. Activism is suppressed; several LGBTQ+ organizations were shut down in 2023-2024.",
		culture:
			"Heavily influenced by traditional norms; queer life is strictly private to avoid social or state retribution.",
		health:
			"No specialized services; disclosure to medical staff is risky and often results in social stigma.",
		posture:
			"Hostile - Legal status is undermined by active social and state-led monitoring.",
	},
	kazakhstan: {
		name: "Kazakhstan",
		continent: "asia",
		status: "red",
		legal:
			"CRITICAL: In early 2026, Kazakhstan signed new laws banning 'LGBTQ Propaganda,' effectively criminalizing visibility and activism.",
		travel:
			"High Risk. Avoid all public symbols of LGBTQ+ identity. Authorities are using new laws to target safe spaces and websites.",
		culture:
			"Rapidly deteriorating; following the 'Russia-style' censorship model, local community groups have been forced underground.",
		health:
			"Visibility in healthcare settings is now a legal risk for both patient and provider under the new 2026 laws.",
		posture:
			"Hostile - Rapid legislative shift toward systemic censorship (Feb 2026).",
	},
	kenya: {
		name: "Kenya",
		continent: "africa",
		status: "orange",
		legal:
			"Same-sex acts remain illegal (14-21 years prison). The 'Family Protection Bill' in parliament (Feb 2026) seeks to mimic Uganda's harsher laws by criminalizing the 'promotion' of LGBTQ+ rights.",
		travel:
			"Caution advised. While Nairobi and Mombasa have discreet queer scenes, public visibility is risky. Monitor the 2026 legislative sessions closely.",
		culture:
			"Polarized; brave activist groups like NGLHRC and Pema Kenya are fighting a massive legal battle against rising political homophobia.",
		health:
			"Safe Access: Pema Kenya (Mombasa) and NGLHRC (Nairobi) provide legal aid and health referrals. Use 'Jali Yetu' (Our Care) project clinics for identity-affirming care.",
		posture:
			"Elevated - Watch for Supreme Court rulings on the 'Family Protection Bill' expected by mid-2026.",
	},
	kiribati: {
		name: "Kiribati",
		continent: "oceania",
		status: "yellow",
		legal:
			"Illegal for men; same-sex acts between women are not mentioned. High social stigma and religious influence.",
		travel:
			"Safe but discreet. Public displays of affection (PDA) are discouraged for all, and visibility for same-sex couples is not recommended.",
		culture:
			"Deeply traditional and Christian; LGBTQ+ life is entirely private and rarely discussed in public forums.",
		health:
			"Basic care only; medical staff may lack sensitivity to LGBTQ+ health concerns.",
		posture: "Stagnant - No current movement toward decriminalization.",
	},
	kuwait: {
		name: "Kuwait",
		continent: "asia",
		status: "red",
		legal:
			"Strictly illegal. Laws against 'imitating the opposite sex' are frequently used to target trans and gender-nonconforming people.",
		travel:
			"High Risk. Total discretion is mandatory. Harassment by authorities and arbitrary detention are common.",
		culture:
			"Invisible in public. Social media is heavily monitored for any content deemed 'immoral' or 'queer'.",
		health:
			"No resources; seeking care for identity-related issues carries extreme legal and social risk.",
		posture: "Hostile - Active state-led monitoring and enforcement.",
	},
	kyrgyzstan: {
		name: "Kyrgyzstan",
		continent: "asia",
		status: "red",
		legal:
			"Technically legal, but a 2023-2024 'propaganda' law (similar to Russia) prohibits any positive information about LGBTQ+ lives.",
		travel:
			"High Risk. Police harassment and raids on safe spaces have increased significantly since the propaganda ban.",
		culture:
			"Rapidly deteriorating; local NGOs like 'Labrys' face extreme pressure and constant surveillance.",
		health:
			"High medical stigma; the propaganda law has made providers fearful of treating the community openly.",
		posture: "Hostile - Rapid shift toward state-sanctioned censorship.",
	},
	laos: {
		name: "Laos",
		continent: "asia",
		status: "red",
		legal:
			"No specific laws against same-sex acts, but authorities use 'public order' and 'cultural values' to suppress visibility.",
		travel:
			"Caution advised. Physical safety is generally high, but social 'invisibility' is mandatory for the community.",
		culture:
			"Conservative and private; there are no public Pride events or organizations, and activists operate with extreme caution.",
		health:
			"Limited care; most inclusive services are provided by international HIV/AIDS NGOs with low public profiles.",
		posture: "Stagnant - Safety is maintained through total discretion.",
	},
	latvia: {
		name: "Latvia",
		continent: "europe",
		status: "green",
		legal:
			"Civil unions (Partnership) legal since July 2024. The law provides significant legal recognition for same-sex couples.",
		travel:
			"Very Safe. Riga is a modern European capital with a small but vibrant and safe inclusive scene.",
		culture:
			"Changing rapidly; the 2023 election of Edgars Rinkēvičs as the world's first openly gay head of state has improved social standing.",
		health:
			"Highly inclusive in Riga; private clinics are sensitized and modern.",
		posture: "Stable - Steady progress toward Northern European standards.",
	},
	lebanon: {
		name: "Lebanon",
		continent: "asia",
		status: "red",
		legal:
			"Legal status is ambiguous (Article 534). Raids on queer spaces and 'debauchery' crackdowns have increased since 2023.",
		travel:
			"High Risk. Once a regional hub for the community, a recent political crackdown has made visibility dangerous. Avoid all public events.",
		culture:
			"Under siege; brave organizations like 'Helem' continue to fight, but many safe spaces in Beirut have been closed.",
		health:
			"Good NGOs (e.g., Proud Lebanon) exist but operate under high risk of state interference.",
		posture:
			"Hostile - Rapidly worsening environment due to political pressure.",
	},
	lesotho: {
		name: "Lesotho",
		continent: "africa",
		status: "yellow",
		legal:
			"Decriminalized in 2012. However, there is no legal recognition of unions or anti-discrimination protection.",
		travel:
			"Safe but discreet. Social attitudes remain conservative; discretion is advised outside of major hotels.",
		culture:
			"The 'People's Matrix' is the primary local activist group; social life is quiet and largely centered around private circles.",
		health:
			"Minimal support; general healthcare is accessible but lacks sensitization to LGBTQ+ issues.",
		posture: "Neutral - Stable but without legislative growth.",
	},
	liberia: {
		name: "Liberia",
		continent: "africa",
		status: "red",
		legal:
			"Strictly illegal. 'Voluntary sodomy' is a first-degree misdemeanor. High risk of mob violence and harassment.",
		travel:
			"Dangerous. Public visibility is likely to lead to assault or arrest. Total discretion is vital.",
		culture:
			"Hostile; political rhetoric often targets the community to gain religious and traditional support.",
		health:
			"No resources; seeking identity-related care carries a severe risk of being reported to family or police.",
		posture: "Hostile - Severe lack of safety or protection.",
	},
	libya: {
		name: "Libya",
		continent: "africa",
		status: "red",
		legal:
			"Illegal under the Penal Code and Sharia-influenced laws. Extremely unsafe due to ongoing civil conflict.",
		travel:
			"Extremely Dangerous. Total absence of law and order means extrajudicial groups can target LGBTQ+ people with total impunity.",
		culture:
			"Non-existent in public. Any LGBTQ+ identity is hidden for survival in a climate of extreme religious conservatism.",
		health:
			"Non-existent; medical facilities are in crisis and provide zero privacy or safety for the community.",
		posture: "Extremely Hostile - Danger from both the state and militias.",
	},
	liechtenstein: {
		name: "Liechtenstein",
		continent: "europe",
		status: "green",
		legal:
			"Full marriage equality officially in effect since January 2025. One of the last Western European nations to achieve this.",
		travel:
			"Very Safe. A tiny, prosperous, and highly professional nation that now offers full legal equality to all guests.",
		culture:
			"Quiet and respectful; the 2024 referendum showed a strong majority support for modernizing rights.",
		health:
			"Inclusive and integrated into the broader European health network (Swiss standards).",
		posture: "Very Stable - Recent full legal equality achieved.",
	},
	lithuania: {
		name: "Lithuania",
		continent: "europe",
		status: "green",
		legal:
			"Legal since 1993. While 'protection of minors' laws exist to limit public visibility, physical safety is high.",
		travel:
			"Safe. Vilnius is a welcoming city with a growing and visible inclusive community.",
		culture:
			"Slowly improving; Pride events in Vilnius are becoming larger and more mainstream despite political pushback.",
		health:
			"Generally safe; healthcare professionals in major cities are professional and respect patient privacy.",
		posture:
			"Stable - Steady progress despite conservative legislative attempts.",
	},
	luxembourg: {
		name: "Luxembourg",
		continent: "europe",
		status: "green",
		legal:
			"Full marriage equality and adoption rights since 2015. Extremely strong anti-discrimination protections.",
		travel:
			"Extremely Safe. One of the most inclusive and progressive nations in the world for LGBTQ+ people.",
		culture:
			"Highly visible; former Prime Minister Xavier Bettel was one of the first openly gay world leaders.",
		health:
			"Top-tier inclusive care; specialized services are fully integrated into the public healthcare system.",
		posture: "Very Stable - A global champion of human rights.",
	},
	madagascar: {
		name: "Madagascar",
		continent: "africa",
		status: "yellow",
		legal:
			"Legal (never criminalized). However, same-sex unions are not recognized and social stigma is high.",
		travel:
			"Safe but discreet. Poverty and instability are the primary concerns; LGBTQ+ travelers should avoid PDA in rural areas.",
		culture:
			"Very private; there is a small, quiet community in Antananarivo, but visibility is low.",
		health:
			"Basic care; medical facilities lack specialized training and identity-related privacy is not guaranteed.",
		posture: "Neutral - Stability maintained through low visibility.",
	},
	malawi: {
		name: "Malawi",
		continent: "africa",
		status: "yellow",
		legal:
			"Laws against same-sex acts are currently 'suspended' (moratorium), but they remain on the books.",
		travel:
			"Caution advised. While there is a moratorium on arrests, social stigma and occasional harassment remain high.",
		culture:
			"The local group 'CEDEP' is active in providing support; the community is small and operates with caution.",
		health:
			"Developing NGO care; CEDEP provides referrals for sensitized medical and legal support.",
		posture: "Stagnant - Legal limbo creates ongoing uncertainty.",
	},
	malaysia: {
		name: "Malaysia",
		continent: "asia",
		status: "red",
		legal:
			"Strictly illegal under both federal and Sharia laws. Penalties include prison and corporal punishment.",
		travel:
			"High Risk. Total discretion is required. The 2023-2024 crackdown on rainbow-themed items (Swatches) shows extreme hostility.",
		culture:
			"Severely suppressed. Authorities actively monitor social media and raid private gatherings deemed 'LGBTQ-themed'.",
		health:
			"Very high medical stigma; state doctors are often encouraged to promote conversion practices.",
		posture: "Hostile - Increasing state-led persecution and censorship.",
	},
	maldives: {
		name: "Maldives",
		continent: "asia",
		status: "red",
		legal:
			"Strictly illegal. Sharia law is applied to citizens. Same-sex acts can lead to prison, fines, or lashing.",
		travel:
			"Safe ONLY in private resorts. On local inhabited islands, absolute discretion is mandatory and PDA is dangerous.",
		culture:
			"Strictly conservative; local LGBTQ+ people face severe persecution and often live in total secrecy.",
		health:
			"No community resources; disclosure to medical staff on local islands is legally and socially dangerous.",
		posture:
			"Hostile - Dual system: tolerance for tourists vs. persecution for locals.",
	},
	mali: {
		name: "Mali",
		continent: "africa",
		status: "red",
		legal:
			"Technically legal, but the current security crisis and rise of religious extremism make it extremely unsafe.",
		travel:
			"Extremely Dangerous. High risk of kidnapping and violence from armed groups who target 'western values' and LGBTQ+ people.",
		culture:
			"Invisible for survival. In a climate of total instability, any public visibility is life-threatening.",
		health:
			"Non-existent specialized care; general health infrastructure is severely compromised by conflict.",
		posture:
			"Extremely Hostile - Danger from both the state and non-state actors.",
	},
	malta: {
		name: "Malta",
		continent: "europe",
		status: "green",
		legal:
			"Consistently ranked #1 in the world for LGBTQ+ rights. Full marriage equality and ban on 'conversion' therapy.",
		travel:
			"Extremely Safe. One of the most welcoming and inclusive nations for international travelers.",
		culture:
			"Highly visible and celebrated; the annual 'Malta Pride' is a major national event with full state support.",
		health:
			"Excellent specialized clinics; 'GU Clinic' provides world-class, inclusive sexual health and gender care.",
		posture: "Very Stable - Global gold standard for rights and safety.",
	},
	"marshall-islands": {
		name: "Marshall Islands",
		continent: "oceania",
		status: "green",
		legal:
			"Decriminalized in 2011. Discrimination based on sexual orientation is prohibited by law.",
		travel:
			"Safe. A welcoming environment with no documented hostility toward LGBTQ+ travelers.",
		culture:
			"Small and private; social life is discreet but unbothered by the state or local community.",
		health:
			"Small community support; general medical care is professional but lacks deep specialization.",
		posture: "Stable - Protective legal baseline in place.",
	},
	mauritania: {
		name: "Mauritania",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Strict Sharia law mandates the death penalty (by stoning) for same-sex acts between men.",
		travel:
			"Extremely Dangerous. Total state and social hostility. Any form of visibility is a capital offense.",
		culture:
			"Non-existent in public. Total silence is maintained for survival due to extreme religious monitoring.",
		health:
			"No resources; medical facilities are not safe spaces for the community.",
		posture: "Extremely Hostile - Maximum legal and social repression.",
	},
	mauritius: {
		name: "Mauritius",
		continent: "africa",
		status: "green",
		legal:
			"Decriminalized in 2023. The Supreme Court struck down the 'buggery' law as unconstitutional.",
		travel:
			"Safe and welcoming. The island is rapidly becoming an inclusive hub for Indian Ocean tourism.",
		culture:
			"Diverse and evolving; the 2023 legal victory has significantly boosted the confidence and visibility of local groups.",
		health:
			"Inclusive private clinics are available; public health is moving toward sensitized care.",
		posture: "Stable and Improving - Landmark recent legal progress.",
	},
	mexico: {
		name: "Mexico",
		continent: "green",
		legal:
			"Full marriage equality nationwide since 2022. Strong federal laws against discrimination.",
		travel:
			"Safe. Mexico City (Zona Rosa) and Puerto Vallarta are world-class inclusive destinations.",
		culture:
			"Massive visibility; Mexico City Pride is one of the largest in the world. High visibility in media and politics.",
		health:
			"Excellent care in major hubs; 'Clinica Condesa' in CDMX is a global model for inclusive community health.",
		posture:
			"Stable - Deeply rooted social and legal visibility in urban centers.",
	},
	micronesia: {
		name: "Micronesia",
		continent: "oceania",
		status: "green",
		legal:
			"Never criminalized. Anti-discrimination laws cover sexual orientation in employment and services.",
		travel:
			"Safe. A generally tolerant and quiet environment with no specific risks for LGBTQ+ travelers.",
		culture:
			"Private and respectful; identity is viewed as a personal matter and rarely draws public scrutiny.",
		health:
			"Basic support; medical services are professional and provide standard privacy.",
		posture: "Stable - Steady baseline of safety.",
	},
	moldova: {
		name: "Moldova",
		continent: "europe",
		status: "green",
		legal:
			"Legalized since 1995. Anti-bias and anti-discrimination laws have been significantly improved for EU alignment.",
		travel:
			"Safe. Chisinau is becoming more welcoming; 'Moldova Pride' has grown larger and more peaceful each year.",
		culture:
			"Changing slowly; the urban youth are progressive, though rural areas remain socially conservative.",
		health:
			"Support in Chisinau through GENDERDOC-M; they provide safe and sensitized health referrals.",
		posture: "Improving - Strong move toward European human rights standards.",
	},
	monaco: {
		name: "Monaco",
		continent: "europe",
		status: "green",
		legal:
			"Civil unions (Cohabitation agreements) are legal. Same-sex acts were decriminalized in 1793.",
		travel:
			"Very Safe. A sophisticated and professional destination where privacy and safety are paramount.",
		culture:
			"Quietly inclusive; while there is no large public Pride event, the society is highly tolerant and cosmopolitan.",
		health:
			"High standard of care; medical facilities are world-class and provide absolute patient privacy.",
		posture: "Very Stable - Consistent and safe environment.",
	},
	mongolia: {
		name: "Mongolia",
		continent: "asia",
		status: "yellow",
		legal:
			"Legal. Anti-discrimination laws explicitly include sexual orientation and gender identity.",
		travel:
			"Safe in Ulaanbaatar. Caution is advised regarding PDA in rural areas where social attitudes are traditional.",
		culture:
			"The 'LGBT Centre Mongolia' is a powerful and visible force; urban youth are increasingly open and active.",
		health:
			"LGBT Centre in Ulaanbaatar provides a safe clinic and referrals for specialized support.",
		posture: "Stable - Strong legal text despite social growing pains.",
	},
	montenegro: {
		name: "Montenegro",
		continent: "europe",
		status: "green",
		legal:
			"Same-sex partnerships legal since 2021. Anti-discrimination laws are well-aligned with EU standards.",
		travel:
			"Safe. Podgorica and coastal resorts like Budva are welcoming and safe for LGBTQ+ couples.",
		culture:
			"Socially conservative but evolving; Pride events in Podgorica are now well-protected by the state.",
		health:
			"Inclusive in major cities and coastal hubs; healthcare providers are increasingly sensitized.",
		posture: "Stable - Consistent progress toward full EU integration.",
	},
	morocco: {
		name: "Morocco",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Article 489 penalizes same-sex acts with up to 3 years in prison. Frequent social media 'outing' campaigns.",
		travel:
			"High Risk. Total discretion is required. High risk of harassment and arbitrary arrest for public displays of identity.",
		culture:
			"Strictly conservative; queer life is hidden to avoid the dual threats of state arrest and family violence.",
		health:
			"High medical stigma; seeking care for related issues can lead to invasive questioning or reporting.",
		posture: "Hostile - Legal and social environment remains repressive.",
	},
	mozambique: {
		name: "Mozambique",
		continent: "africa",
		status: "yellow",
		legal:
			"Decriminalized in 2015. However, there are no laws for recognition of unions or specific protections.",
		travel:
			"Safe but discreet. Maputo is the most welcoming area; rural regions remain socially traditional.",
		culture:
			"The group 'Lambda' is a vocal and respected advocate; social life in the capital is increasingly open but quiet.",
		health:
			"Developing support; Lambda provides referrals for inclusive healthcare and legal assistance.",
		posture: "Neutral/Improving - Positive legal shift in the last decade.",
	},
	myanmar: {
		name: "Myanmar",
		continent: "asia",
		status: "red",
		legal:
			"Illegal (Section 377). Extremely unsafe due to the ongoing civil war and targeted violence by the military junta.",
		travel:
			"Extremely Dangerous. All travel is advised against. LGBTQ+ activists are specifically targeted for arrest and torture by the state.",
		culture:
			"Severely suppressed for survival; safe spaces have been obliterated by the ongoing conflict.",
		health:
			"Non-existent specialized care; general health infrastructure is in a state of total collapse.",
		posture: "Extremely Hostile - Maximum danger from state-led violence.",
	},

	namibia: {
		name: "Namibia",
		continent: "africa",
		status: "yellow",
		legal: "Decriminalized in 2024 by high court.",
		health: "Active support in Windhoek.",
	},
	nauru: {
		name: "Nauru",
		continent: "oceania",
		status: "yellow",
		legal: "Decriminalized in 2016.",
		health: "Limited resources.",
	},
	nepal: {
		name: "Nepal",
		continent: "asia",
		status: "yellow",
		legal: "Marriage equality recognized by courts.",
		health: "Blue Diamond Society support.",
	},
	netherlands: {
		name: "Netherlands",
		continent: "europe",
		status: "green",
		legal: "First in the world to legalize gay marriage (2001).",
		health: "Extensive, world-class care.",
	},
	"new-zealand": {
		name: "New Zealand",
		continent: "oceania",
		status: "green",
		legal: "Extremely progressive; full equality.",
		health: "Specialized national care.",
	},
	nicaragua: {
		name: "Nicaragua",
		continent: "americas",
		status: "red",
		legal: "Legal, but high state-led political risk.",
		health: "Limited resources.",
	},
	niger: {
		name: "Niger",
		continent: "africa",
		status: "red",
		legal: "Legal, but culturally strictly forbidden.",
		health: "No resources.",
	},
	nigeria: {
		name: "Nigeria",
		continent: "africa",
		status: "red",
		legal:
			"SSMPA (2013) remains in force. 14 years prison for 'homosexual acts'. Sharia law in North carries death penalty.",
		health:
			"Private Care Only: Use 'TIERS' (The Initiative for Equal Rights) or 'Improved Sexual Health and Rights Advocacy Initiative'. Never disclose status in federal hospitals.",
		posture:
			"High Alert - Increase in 'Kito' blackmail gangs reported in Lagos and Abuja this month (Feb 2026).",
	},
	niue: {
		name: "Niue",
		continent: "oceania",
		status: "green",
		legal: "Legal; welcoming.",
		health: "Basic care.",
	},
	"north-korea": {
		name: "North Korea",
		continent: "asia",
		status: "red",
		legal: "No specific laws, but total social control.",
		health: "Non-existent care.",
	},
	"north-macedonia": {
		name: "North Macedonia",
		continent: "europe",
		status: "green",
		legal: "Legalized with developing protections.",
		health: "Support in Skopje.",
	},
	norway: {
		name: "Norway",
		continent: "europe",
		status: "green",
		legal: "Consistently ranked among the safest globally.",
		health: "Universal inclusive care.",
	},
	oman: {
		name: "Oman",
		continent: "asia",
		status: "red",
		legal: "Strictly illegal.",
		health: "No resources.",
	},
	pakistan: {
		name: "Pakistan",
		continent: "asia",
		status: "red",
		legal: "Strictly illegal; trans rights exist but are under threat.",
		health: "NGO-led care only.",
	},
	palau: {
		name: "Palau",
		continent: "oceania",
		status: "green",
		legal: "Decriminalized in 2014.",
		health: "Welcoming.",
	},
	palestinian_territories: {
		name: "Palestinian Territories",
		continent: "asia",
		status: "red",
		legal: "Illegal in Gaza; high social risk in West Bank.",
		health: "Non-existent care.",
	},
	panama: {
		name: "Panama",
		continent: "americas",
		status: "yellow",
		legal: "Legal, but constitutional marriage ban.",
		health: "Reliable private care.",
	},
	"papua-new-guinea": {
		name: "Papua New Guinea",
		continent: "oceania",
		status: "red",
		legal: "Illegal; high social violence.",
		health: "No safe care.",
	},
	paraguay: {
		name: "Paraguay",
		continent: "americas",
		status: "red",
		legal: "Legal, but very high levels of intolerance.",
		health: "Poor inclusive care.",
	},
	peru: {
		name: "Peru",
		continent: "americas",
		status: "yellow",
		legal: "Legal, but no protection laws.",
		health: "Support in Lima.",
	},
	philippines: {
		name: "Philippines",
		continent: "asia",
		status: "yellow",
		legal:
			"As of Jan 10, 2026, Supreme Court recognizes cohabitation/property rights, but marriage remains blocked.",
		health:
			"Local ordinances (like Quezon City) ban conversion therapy as of 2025.",
		posture: "Improving - Strong local protections despite national stalemate.",
	},
	poland: {
		name: "Poland",
		continent: "europe",
		status: "green",
		legal: "Legal, but 'LGBT-free zones' (now mostly abolished).",
		health: "Safe in major cities.",
	},
	portugal: {
		name: "Portugal",
		continent: "europe",
		status: "green",
		legal: "Top-tier legal rights and marriage equality.",
		health: "Highly specialized clinics.",
	},
	qatar: {
		name: "Qatar",
		continent: "asia",
		status: "red",
		legal: "Strictly illegal; high risk.",
		health: "No resources.",
	},
	romania: {
		name: "Romania",
		continent: "europe",
		status: "green",
		legal: "Legal, but high social opposition.",
		health: "Support in Bucharest.",
	},
	russia: {
		name: "Russia",
		continent: "europe",
		status: "red",
		legal: "Extreme 'propaganda' bans; 'extremist' designation.",
		health: "Dangerous to access.",
	},
	rwanda: {
		name: "Rwanda",
		continent: "africa",
		status: "yellow",
		legal:
			"Not criminalized, but marriage is constitutionally banned. Often used 'vagrancy' or 'deviant behavior' laws to detain individuals.",
		health:
			"Moderate Access: Kigali has discrete clinics. Trans health is severely limited; 'ibishegabo' (trans men) often face spectacle/shaming in hospitals. Use private Kigali referrals.",
		posture:
			"Cautious - Government maintains a 'private matter' stance to keep donors happy, but social stigma is extreme.",
	},
	samoa: {
		name: "Samoa",
		continent: "oceania",
		status: "yellow",
		legal: "Illegal for men; Fa'afafine culturally accepted.",
		health: "Mixed care.",
	},
	"san-marino": {
		name: "San Marino",
		continent: "europe",
		status: "green",
		legal: "Civil unions legal; very safe.",
		health: "Excellent care.",
	},
	"sao-tome-and-principe": {
		name: "Sao Tome and Principe",
		continent: "africa",
		status: "yellow",
		legal: "Decriminalized in 2012.",
		health: "Limited resources.",
	},
	"saudi-arabia": {
		name: "Saudi Arabia",
		continent: "asia",
		status: "red",
		legal: "Illegal; carries death penalty.",
		health: "No resources.",
	},
	senegal: {
		name: "Senegal",
		continent: "africa",
		status: "red",
		legal: "Strictly illegal; high harassment.",
		health: "No safe care.",
	},
	serbia: {
		name: "Serbia",
		continent: "europe",
		status: "yellow",
		legal: "Legal, but Pride remains controversial.",
		health: "Strong trans care in Belgrade.",
	},
	seychelles: {
		name: "Seychelles",
		continent: "africa",
		status: "green",
		legal: "Decriminalized in 2016.",
		health: "Welcoming.",
	},
	"sierra-leone": {
		name: "Sierra Leone",
		continent: "africa",
		status: "red",
		legal: "Illegal for men.",
		health: "No resources.",
	},
	singapore: {
		name: "Singapore",
		continent: "asia",
		status: "green",
		legal: "Decriminalized in 2022.",
		health: "Top-tier inclusive care.",
	},
	slovakia: {
		name: "Slovakia",
		continent: "europe",
		status: "green",
		legal: "Legal, but recent increases in bias.",
		health: "Reliable in Bratislava.",
	},
	slovenia: {
		name: "Slovenia",
		continent: "europe",
		status: "green",
		legal: "Marriage equality and adoption rights.",
		health: "Highly inclusive.",
	},
	"solomon-islands": {
		name: "Solomon Islands",
		continent: "oceania",
		status: "yellow",
		legal: "Illegal for men.",
		health: "Limited care.",
	},
	somalia: {
		name: "Somalia",
		continent: "africa",
		status: "red",
		legal: "Illegal; death penalty in some areas.",
		health: "No resources.",
	},
	"south-africa": {
		name: "South Africa",
		continent: "africa",
		status: "green",
		legal: "Constitutionally protected. Same-sex marriage is legal.",
		health:
			"Best Access: 'OUT LGBT Well-being' (Pretoria) and 'Triangle Project' (Cape Town). Warning: 2026 UCT study shows 15-year waitlists for surgery in public sector; use NGO clinics for HRT/HIV care.",
		posture:
			"Stable - Safe haven for regional refugees, though 'Corrective Violence' remains a high risk in townships.",
	},
	"south-korea": {
		name: "South Korea",
		continent: "asia",
		status: "green",
		legal: "Legal, but high social pressure and no anti-bias laws.",
		health: "Excellent specialized clinics.",
	},
	"south-sudan": {
		name: "South Sudan",
		continent: "africa",
		status: "red",
		legal: "Strictly illegal.",
		health: "No resources.",
	},
	spain: {
		name: "Spain",
		continent: "europe",
		status: "green",
		legal: "Global leader in LGBTQ+ freedom.",
		health: "Universal, world-class inclusive care.",
	},
	"sri-lanka": {
		name: "Sri Lanka",
		continent: "asia",
		status: "red",
		legal: "Decriminalization pending court ruling; high stigma.",
		health: "Support in Colombo.",
	},
	sudan: {
		name: "Sudan",
		continent: "africa",
		status: "red",
		legal: "Illegal; severe penalties.",
		health: "No resources.",
	},
	suriname: {
		name: "Suriname",
		continent: "americas",
		status: "yellow",
		legal: "Decriminalized; society is generally tolerant.",
		health: "Limited care.",
	},
	sweden: {
		name: "Sweden",
		continent: "europe",
		status: "green",
		legal: "Top-tier rights and safety.",
		health: "Highly specialized national care.",
	},
	switzerland: {
		name: "Switzerland",
		continent: "europe",
		status: "green",
		legal: "Marriage equality legalized in 2022.",
		health: "Excellent healthcare.",
	},
	syria: {
		name: "Syria",
		continent: "asia",
		status: "red",
		legal: "Illegal; extremely unsafe.",
		health: "No resources.",
	},
	taiwan: {
		name: "Taiwan",
		continent: "asia",
		status: "green",
		legal: "First in Asia to legalize gay marriage.",
		health: "Inclusive and specialized centers.",
	},
	tajikistan: {
		name: "Tajikistan",
		continent: "asia",
		status: "red",
		legal: "Legal, but state maintains 'registry' of queer people.",
		health: "Very high risk.",
	},
	tanzania: {
		name: "Tanzania",
		continent: "africa",
		status: "red",
		legal:
			"Consensual same-sex acts carry 30 years to life imprisonment. Zanzibar has separate, strict laws (5 years for women).",
		health:
			"HIGH RISK: Government crackdown on HIV outreach for MSM (Men who Sex with Men) is active. Use 'Community Health Services' through discrete NGOs only. Do not use state-run HIV portals.",
		posture:
			"High Alert - 2026 reports of forced anal examinations and arbitrary arrests in Dar es Salaam.",
	},
	thailand: {
		name: "Thailand",
		continent: "asia",
		status: "green",
		legal:
			"Marriage Equality Law officially took effect Jan 23, 2025. Full adoption rights granted.",
		health:
			"Global hub for gender-affirming care; highly inclusive public/private systems.",
		posture: "Highly Safe - 2026 regional leader.",
	},
	"timor-leste": {
		name: "Timor-Leste",
		continent: "asia",
		status: "yellow",
		legal: "Legal; generally safe.",
		health: "Limited resources.",
	},
	togo: {
		name: "Togo",
		continent: "africa",
		status: "red",
		legal: "Strictly illegal.",
		health: "No resources.",
	},
	tonga: {
		name: "Tonga",
		continent: "oceania",
		status: "yellow",
		legal: "Illegal for men; Leiti community cultural role.",
		health: "Limited care.",
	},
	"trinidad-and-tobago": {
		name: "Trinidad and Tobago",
		continent: "americas",
		status: "red",
		legal:
			"URGENT: Recriminalized in March 2025. The Court of Appeal overturned the 2018 decriminalization ruling.",
		health:
			"Public stigma increasing; legal protections for patients have weakened.",
		posture: "Hostile - High monitoring of 2026 court challenges advised.",
	},
	tunisia: {
		name: "Tunisia",
		continent: "africa",
		status: "red",
		legal: "Illegal; frequent arrests and anal testing.",
		health: "High medical stigma.",
	},
	turkey: {
		name: "Turkey",
		continent: "asia",
		status: "yellow",
		legal:
			"Legal since 1858. However, 'public morality' and 'indecency' laws are frequently used to ban Pride events and target activists.",
		travel:
			"Safe in Istanbul (Beyoğlu/Kadıköy) and coastal resorts. Caution is advised during June (Pride month) as police interventions are common.",
		culture:
			"Vibrant but embattled; a massive, resilient inclusive community exists in Istanbul and Izmir despite increasing state-led hostility.",
		health:
			"Support groups in Istanbul (e.g., SPoD) provide sensitized legal and medical referrals; state hospitals can be inconsistent.",
		posture: "Volatile - High state-led hostility toward public visibility.",
	},
	turkmenistan: {
		name: "Turkmenistan",
		continent: "asia",
		status: "red",
		legal:
			"Strictly illegal for men (up to 2 years prison). Same-sex acts between women are not specifically mentioned but socially forbidden.",
		travel:
			"High Risk. Total state surveillance of all foreigners. Absolute discretion is mandatory for survival.",
		culture:
			"Entirely invisible. State-led social control makes any public LGBTQ+ identity or advocacy a high-risk criminal act.",
		health:
			"No resources; medical settings are not safe spaces and identity-related privacy is non-existent.",
		posture: "Extremely Hostile - Maximum state monitoring.",
	},
	tuvalu: {
		name: "Tuvalu",
		continent: "oceania",
		status: "yellow",
		legal:
			"Illegal for men (up to 14 years). However, the law is rarely enforced against tourists. Social stigma remains high.",
		travel:
			"Safe but discreet. A small, polite society where visitors are respected, but public visibility of gay identity is not recommended.",
		culture:
			"Highly traditional and Christian; LGBTQ+ life is a private matter and not discussed in public forums.",
		health:
			"Basic care; medical services are limited and lack specialized training for the community.",
		posture: "Stagnant - Legal status vs. social silence.",
	},
	uganda: {
		name: "Uganda",
		continent: "africa",
		status: "red",
		legal:
			"CRITICAL: The 'Anti-Homosexuality Act 2023' remains in effect. Aggravated homosexuality can carry the death penalty.",
		travel:
			"Extremely Dangerous. 2026 Election cycle has increased police targeting of suspected safe-houses and digital surveillance.",
		culture:
			"Extreme Hostility. The 'Kito' trap (entrapment on dating apps) is at an all-time high as of Feb 2026. Do not use dating apps.",
		health:
			"HIGH RISK: Recent US-Uganda health agreements (Feb 2026) have shifted funding to govt clinics. Avoid state facilities. Contact 'Sexual Minorities Uganda (SMUG)' for a list of vetted, underground providers.",
		posture:
			"Critical - Active house raids and digital entrapment reported Feb 2026.",
	},
	ukraine: {
		name: "Ukraine",
		continent: "europe",
		status: "yellow",
		legal:
			"Legal. Legislation for 'Registered Partnerships' is currently pending in parliament (2025-2026).",
		travel:
			"Caution advised (War Zone). While social tolerance has increased due to the war effort, safety is primarily dictated by the ongoing conflict.",
		culture:
			"Fast-changing; LGBTQ+ soldiers (the 'Unicorn' battalion) have significantly improved the community's standing in national identity.",
		health:
			"NGO support active despite war; organizations like 'Fulcrum' and 'KyivPride' provide medical and psychological support.",
		posture:
			"Improving - Strong movement toward legal recognition despite the conflict.",
	},
	"united-arab-emirates": {
		name: "United Arab Emirates",
		continent: "asia",
		status: "red",
		legal:
			"Strictly illegal. Federal laws penalize 'indecency' and 'cross-dressing'. High risk for trans and gender-nonconforming travelers.",
		travel:
			"High Risk. Total discretion is mandatory. PDA is dangerous for all, but same-sex PDA will result in immediate arrest and deportation.",
		culture:
			"Discreet and private. Dubai and Abu Dhabi have underground scenes, but they are subject to sudden police raids.",
		health:
			"No community resources; medical facilities are bound by state morality codes and provide no specific support.",
		posture: "Hostile - Strict legal enforcement of 'public morality'.",
	},
	"united-kingdom": {
		name: "United Kingdom",
		continent: "europe",
		status: "green",
		legal:
			"Full marriage equality (since 2014) and comprehensive anti-discrimination protections. Banned 'Conversion Therapy' for sexual orientation.",
		travel:
			"Very Safe. London, Manchester (Canal St), and Brighton are global centers of inclusive culture.",
		culture:
			"Highly visible and diverse; LGBTQ+ people are integrated into all levels of media, politics, and daily life.",
		health:
			"NHS specialized LGBTQ+ clinics (e.g., Dean Street in London) provide world-class, free sexual health and gender care.",
		posture: "Very Stable - High standard of legal and social safety.",
	},
	"united-states": {
		name: "United States",
		continent: "americas",
		status: "green",
		legal:
			"Marriage equality nationwide since 2015. However, legal protections and safety vary significantly by state.",
		travel:
			"Safe. Major hubs (NYC, San Francisco, Chicago) are extremely welcoming. Caution is advised in certain rural Southern/Midwestern areas.",
		culture:
			"Vibrant and highly political; massive public Pride festivals. 2026 Monitoring: High-profile federal trials regarding state-level healthcare bans are ongoing.",
		health:
			"Excellent specialized networks (e.g., Callen-Lorde, Fenway Health); world-class care available in most urban centers.",
		posture:
			"Stable/Volatile - National marriage rights are secure, but state-level trans rights are a major 2026 battleground.",
	},
	uruguay: {
		name: "Uruguay",
		continent: "americas",
		status: "green",
		legal:
			"Most progressive country in South America. Marriage equality since 2013 and advanced gender identity laws since 2009.",
		travel:
			"Very Safe. Montevideo is exceptionally welcoming; the country is a regional leader in human rights and secularism.",
		culture:
			"Inclusive and peaceful; LGBTQ+ visibility is a standard part of social and political life.",
		health:
			"Highly inclusive healthcare; public health guidelines ensure non-discriminatory and specialized support.",
		posture: "Very Stable - Consistent regional leader in equality.",
	},
	uzbekistan: {
		name: "Uzbekistan",
		continent: "asia",
		status: "red",
		legal:
			"Illegal for men (up to 3 years prison). High risk of state-led harassment and arbitrary detention.",
		travel:
			"High Risk. Total discretion is required. Authorities are known to use blackmail and entrapment on dating apps.",
		culture:
			"Strictly underground; social stigma and the threat of state violence keep the community entirely invisible.",
		health:
			"No resources; medical settings are dangerous for the community due to lack of privacy and reporting risks.",
		posture: "Hostile - Continued criminalization despite regional trends.",
	},
	vanuatu: {
		name: "Vanuatu",
		continent: "oceania",
		status: "yellow",
		legal:
			"Legal (never criminalized). Anti-discrimination laws cover sexual orientation in employment.",
		travel:
			"Safe. A generally tolerant and polite environment where identity is viewed as a personal, private matter.",
		culture:
			"Traditional and quiet; public visibility is low, but there is no state-led persecution of the community.",
		health:
			"Basic care; medical professionals provide standard privacy and professional services.",
		posture: "Stable - Safe baseline of social tolerance.",
	},
	"vatican-city": {
		name: "Vatican City",
		continent: "europe",
		status: "yellow",
		legal:
			"No specific laws; based on Italian law. However, 'Fiducia Supplicans' (2023) allows for non-liturgical blessings of same-sex couples.",
		travel:
			"Safe but respectful. Absolute discretion is required regarding PDA as it is a religious site.",
		culture:
			"Strictly religious; while the tone is shifting under Pope Francis, it remains a conservative environment.",
		health: "N/A - General medical services provided via Italy.",
		posture: "Neutral - Moderate shift in religious tone but no legal change.",
	},
	venezuela: {
		name: "Venezuela",
		continent: "americas",
		status: "yellow",
		legal:
			"Legal since 1997. However, same-sex unions are not recognized, and the state collapse has stalled all legislative progress.",
		travel:
			"High Risk (Instability). Beyond general safety concerns, LGBTQ+ travelers have no state protection against bias or harassment.",
		culture:
			"Vibrant but embattled; the community is resilient but faces massive hurdles due to the national humanitarian crisis.",
		health:
			"Poor healthcare access; inclusive services are almost entirely dependent on a few remaining NGOs in Caracas.",
		posture: "Stagnant - Lack of progress due to national instability.",
	},
	vietnam: {
		name: "Vietnam",
		continent: "asia",
		status: "green",
		legal:
			"Legal. Vietnam is very tolerant; a 2022 health ministry directive officially stated that 'homosexuality is not a disease'.",
		travel:
			"Safe and welcoming. Hanoi and Ho Chi Minh City have thriving, visible, and safe inclusive scenes.",
		culture:
			"Socially tolerant; 'VietPride' is celebrated openly, and the government is increasingly seen as a regional leader in tolerance.",
		health:
			"Improving specialized care; private clinics in major cities are highly sensitized to LGBTQ+ and trans health.",
		posture: "Improving - Strong social and state-led move toward acceptance.",
	},
	yemen: {
		name: "Yemen",
		continent: "asia",
		status: "red",
		legal:
			"Illegal. Strict Sharia law mandates the death penalty. Extremely dangerous due to ongoing civil war and extremism.",
		travel:
			"Extremely Dangerous. Total state and social hostility. Any form of visibility is a capital offense.",
		culture:
			"Non-existent in public; identity is hidden for survival in a climate of total social and political collapse.",
		health:
			"Non-existent care; medical infrastructure is in ruins and provides zero safety for the community.",
		posture: "Extremely Hostile - Maximum danger from all sectors.",
	},
	zambia: {
		name: "Zambia",
		continent: "africa",
		status: "red",
		legal:
			"Strictly illegal. Penalties include 15 years to life imprisonment. High levels of societal and political homophobia.",
		travel:
			"High Risk. Public visibility is likely to lead to harassment or arrest. Total discretion is vital.",
		culture:
			"Hostile; political leaders often use the LGBTQ+ community as a scapegoat for social issues.",
		health:
			"No resources; seeking identity-related care carries a severe risk of state reporting and social outing.",
		posture: "Hostile - Strict legal and social enforcement.",
	},
	zimbabwe: {
		name: "Zimbabwe",
		continent: "africa",
		status: "red",
		legal:
			"Illegal (specific 'Sodomy' laws). High social risk and periodic state-led crackdowns on community gatherings.",
		travel:
			"High Risk. Total discretion is required. High risk of harassment from authorities and occasional raids on safe spaces.",
		culture:
			"Embattled; the 'GALZ' organization is a legendary and brave advocate but operates under constant threat.",
		health:
			"Minimal support; GALZ provides safe referrals for sensitized health and legal support.",
		posture: "Hostile - Continued social and state-led repression.",
	},
	comoros: {
		name: "Comoros",
		continent: "africa",
		status: "red",
		legal:
			"Illegal. Penalties include up to 5 years imprisonment. Heavily influenced by strict religious interpretations.",
		travel:
			"High Risk. Public displays of affection are dangerous. Total discretion is mandatory.",
		culture:
			"Entirely underground; social and religious pressure to conform is extreme.",
		health:
			"No resources; seeking care for related issues is socially and legally risky.",
		posture: "Hostile - Strict religious and legal enforcement.",
	},
	"equatorial-guinea": {
		name: "Equatorial Guinea",
		continent: "africa",
		status: "red",
		legal:
			"Legal, but same-sex couples have no rights or recognition. Harassment under 'public scandal' laws is common.",
		travel:
			"High Risk. Total discretion is required. High levels of state surveillance for all foreign visitors.",
		culture:
			"Invisible; social stigma is so high that no public LGBTQ+ community life is documented.",
		health:
			"No resources; medical infrastructure is generally limited and non-sensitized to LGBTQ+ needs.",
		posture: "Hostile - Repressive social and political climate.",
	},
	grenada: {
		name: "Grenada",
		continent: "americas",
		status: "green",
		legal:
			"Decriminalized in early 2024. The High Court struck down the 'buggery' law as unconstitutional.",
		travel:
			"Safe and welcoming for tourists. Major resorts are highly inclusive and professional.",
		culture:
			"Traditional but respectful; the legal victory has sparked a shift toward social tolerance.",
		health:
			"Basic inclusive care available; medical professionals in the tourism sector are generally non-discriminatory.",
		posture: "Improving - Recent landmark legal progress.",
	},
	somaliland: {
		name: "Somaliland",
		continent: "africa",
		status: "red",
		legal:
			"Unrecognized state. Sharia law applies. 2025-2026 has seen a 'significant number' of gay men sentenced to 8+ years by military courts.",
		travel:
			"Extremely Dangerous. High risk of state-led execution or long-term imprisonment. Absolute invisibility is required.",
		culture:
			"Violently suppressed; any public advocacy or rainbow symbols are seen as 'treason' or 'moral corruption'.",
		health:
			"No Safe Access: Extreme risk. Health services are non-existent for the community. Migration is the only current safety recommendation.",
		posture:
			"Hostile - Active military court trials targeting the community (Feb 2026).",
	},
	"saint-lucia": {
		name: "Saint Lucia",
		continent: "americas",
		status: "red",
		legal:
			"Illegal for men (up to 10 years). While rarely enforced against tourists, same-sex acts remain criminalized.",
		travel:
			"Caution advised. Safe within major resorts, but discretion is recommended in local towns and public spaces.",
		culture:
			"Socially conservative; the influence of the church remains high in local politics and social life.",
		health:
			"Limited resources; inclusive care is primarily provided through discrete HIV/AIDS NGOs.",
		posture: "Stagnant - Legal reform is not currently a political priority.",
	},
}; // <--- MAKE SURE THIS HAS THE BRACE AND SEMICOLON
