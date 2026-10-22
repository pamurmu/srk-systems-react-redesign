import { useState } from 'react';
import {
	ArrowRight,
	ArrowUpRight,
	Building2,
	Camera,
	Check,
	ChevronDown,
	ClipboardCheck,
	Flame,
	HardDrive,
	MapPin,
	Menu,
	Network,
	Phone,
	ShieldCheck,
	Siren,
	Smartphone,
	Wrench,
	X,
	Zap,
} from 'lucide-react';

const PHONE = '9841680498';
const ALT = '9841083498';
const EMAIL = 'ramesh.srksystem@gmail.com';
const ADDRESS =
	'5/351, Rajiv Gandhi Salai (OMR), Opp to Nilgiris, Okkiyamapet, Thoraipakkam, Chennai - 600 097.';
const LOGO_URL = 'https://srksystem.com/logo.svg';
const MAP_EMBED_URL =
	'https://www.google.com/maps?q=5/351,%20Rajiv%20Gandhi%20Salai%20(OMR),%20Thoraipakkam,%20Chennai%20600097&output=embed';
const MAP_LINK_URL =
	'https://www.google.com/maps/search/?api=1&query=5/351,+Rajiv+Gandhi+Salai+(OMR),+Thoraipakkam,+Chennai+600097';

const wa = (
	m = 'Hello SRK Systems, I would like to discuss a fire and security systems requirement.',
) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(m)}`;

const services = [
	[
		'Safety',
		Flame,
		'Fire Alarm Systems',
		'Conventional/addressable panels, smoke and heat detectors, MCPs, hooters, sounders and fault checks.',
	],
	[
		'Safety',
		Siren,
		'Fire Hydrant & Suppression Coordination',
		'Inspection assistance and coordination for hydrant, sprinkler, gas-based suppression, extinguishers and specialist certified work.',
	],
	[
		'Safety',
		Flame,
		'PA & Voice Evacuation Support',
		'Public-address and voice-evacuation coordination for commercial facilities where safe announcements matter.',
	],
	[
		'Security',
		Camera,
		'CCTV & ELV Integration',
		'Camera coverage planning, structured cabling, IP cameras, DVR/NVR setup and system handover.',
	],
	[
		'Security',
		HardDrive,
		'DVR/NVR & Storage Upgrade',
		'Recorder setup, channel mapping, time correction, surveillance HDD sizing, backup-day planning and playback checks.',
	],
	[
		'Access',
		ShieldCheck,
		'Biometric Attendance',
		'Device installation, enrollment, reports, user permissions and admin handover.',
	],
	[
		'Access',
		Network,
		'Access Control & IP Networks',
		'Door readers, EM locks, exit switches, PoE switches, LAN cabling and network stability checks.',
	],
	[
		'Support',
		Wrench,
		'Commercial CCTV AMC',
		'Planned maintenance, remote support options, storage checks and clear service reports.',
	],
	[
		'Support',
		Smartphone,
		'Remote View & User Access',
		'Mobile viewing setup, secure user access, app configuration and staff handover.',
	],
];

const faqs = [
	[
		'Can you inspect an existing fire alarm or CCTV system?',
		'Yes. We can review installed equipment, visible faults, camera coverage, recorder/storage status and handover gaps. Scope and compatibility are confirmed during a site survey.',
	],
	[
		'Do you provide annual maintenance contracts?',
		'Yes. Fire alarm, commercial CCTV and integrated ELV AMC options are available. Scope and pricing depend on site size, equipment condition and visit frequency.',
	],
	[
		'Which areas do you serve?',
		'Our core area includes OMR, Thoraipakkam, Okkiyam Pettai, Perungudi, Sholinganallur, Velachery, Pallikaranai, Medavakkam and nearby Chennai areas.',
	],
	[
		'Can you supply cameras, recorders and accessories?',
		'Selected CCTV, DVR/NVR, surveillance storage, PoE switches, cables, access control and fire alarm accessories can be sourced based on requirement, availability and compatibility.',
	],
];

function BrandLockup({ light = false, compact = false }) {
	return (
		<div className="flex items-center gap-3">
			<img
				src={LOGO_URL}
				alt="SRK Systems"
				className={compact ? 'h-10 w-auto' : 'h-11 w-auto'}
			/>
			<span>
				<b className={`block text-[15px] font-extrabold tracking-[0.01em] ${light ? 'text-ivory' : 'text-ink'}`}>
					SRK SYSTEMS
				</b>
				<small className={`text-xs ${light ? 'text-ivory/65' : 'text-slate-500'}`}>
					Fire · Security · ELV
				</small>
			</span>
		</div>
	);
}

function Header() {
	const [open, setOpen] = useState(false);
	const links = [
		['Solutions', '#solutions'],
		['Process', '#process'],
		['AMC plans', '#amc'],
		['About', '#about'],
		['Contact', '#contact'],
	];

	return (
		<header className="sticky top-0 z-50 border-b border-brass/30 bg-ivory/90 backdrop-blur-xl">
			<div className="wrap flex h-[78px] items-center justify-between gap-4">
				<a href="#home">
					<BrandLockup compact />
				</a>

				<nav className="hidden gap-7 lg:flex">
					{links.map(([label, href]) => (
						<a
							className="text-sm font-semibold tracking-wide text-slate-700 transition hover:text-ink"
							href={href}
							key={label}
						>
							{label}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-4 lg:flex">
					<a href={`tel:+91${PHONE}`} className="text-sm font-bold text-ink">
						<Phone size={15} className="mr-2 inline text-garnet" />
						{PHONE}
					</a>
					<a
						className="rounded-full border border-garnet bg-garnet px-5 py-3 text-sm font-bold text-ivory transition hover:-translate-y-0.5"
						href="#contact"
					>
						Book a survey
					</a>
				</div>

				<button className="text-ink lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
					{open ? <X /> : <Menu />}
				</button>
			</div>

			{open && (
				<nav className="border-t border-brass/30 px-5 pb-5 lg:hidden">
					{links.map(([label, href]) => (
						<a
							key={label}
							onClick={() => setOpen(false)}
							href={href}
							className="block border-b border-brass/20 py-3 font-semibold text-ink"
						>
							{label}
						</a>
					))}
					<a
						href={wa()}
						target="_blank"
						rel="noreferrer"
						className="mt-4 block rounded-full bg-garnet p-3 text-center font-bold text-ivory"
					>
						WhatsApp SRK Systems
					</a>
				</nav>
			)}
		</header>
	);
}

function Heading({ eyebrow, title, text, light = false }) {
	return (
		<div className={`mb-10 max-w-2xl ${light ? 'text-ivory' : ''}`}>
			<p
				className={`mb-4 text-xs font-bold uppercase tracking-[.24em] ${
					light ? 'text-brass-light' : 'text-garnet'
				}`}
			>
				{eyebrow}
			</p>
			<h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
			{text && (
				<p className={`mt-4 max-w-xl leading-7 ${light ? 'text-ivory/70' : 'text-slate-600'}`}>
					{text}
				</p>
			)}
		</div>
	);
}

function Hero() {
	return (
		<section id="home" className="relative overflow-hidden bg-ink text-ivory">
			<div className="hero-halo absolute -right-24 -top-20 h-[420px] w-[420px] rounded-full" />
			<div className="hero-halo absolute -bottom-28 -left-16 h-[340px] w-[340px] rounded-full" />

			<div className="wrap relative grid items-center gap-10 py-14 md:min-h-[660px] md:grid-cols-2 md:py-20">
				<div className="animate-rise">
					<span className="inline-flex rounded-full border border-brass/40 bg-ivory/10 px-4 py-2 text-xs font-bold tracking-wider text-brass-light">
						CHENNAI · OMR & NEARBY
					</span>

					<h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
						Modern protection,
						<span className="block text-brass-light">classic service discipline.</span>
					</h1>

					<p className="mt-6 max-w-xl text-lg leading-8 text-ivory/75">
						Fire alarm, CCTV and ELV integration for factories, warehouses, offices and commercial
						sites with precise commissioning and support-ready handover.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="#contact"
							className="rounded-full bg-brass px-6 py-4 text-center font-bold text-ink transition hover:-translate-y-1"
						>
							Book a site survey <ArrowUpRight className="ml-1 inline" />
						</a>
						<a
							href={wa('Hello SRK Systems, I would like to arrange a fire and security site survey.')}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-ivory/25 px-6 py-4 text-center font-semibold hover:border-brass"
						>
							Discuss on WhatsApp <ArrowRight className="ml-1 inline" />
						</a>
					</div>

					<div className="mt-7 flex flex-wrap gap-3 text-sm text-ivory/70">
						<span>
							<Check className="mr-1 inline text-brass-light" size={16} /> Site-first planning
						</span>
						<span>
							<Check className="mr-1 inline text-brass-light" size={16} /> Branded hardware options
						</span>
						<span>
							<Check className="mr-1 inline text-brass-light" size={16} /> AMC-ready handover
						</span>
					</div>
				</div>

				<div className="relative mx-auto w-full max-w-[560px] animate-rise-delayed">
					<div className="rounded-[30px] border border-ivory/15 bg-ivory/5 p-3 shadow-2xl backdrop-blur-sm">
						<img
							className="h-[320px] w-full rounded-[22px] object-cover sm:h-[420px]"
							src="https://srksystem.com/images/integrated-systems-rack.webp"
							alt="CCTV camera mounted on a building"
						/>
						<div className="grid gap-2 p-2 sm:grid-cols-3">
							{[
								[Flame, 'Fire alarm'],
								[Camera, 'CCTV & NVR'],
								[Network, 'ELV network'],
							].map(([Icon, text]) => (
								<div key={text} className="flex items-center gap-2 rounded-xl bg-ink/40 p-3 text-sm">
									<Icon className="text-brass-light" size={18} />
									{text}
								</div>
							))}
						</div>
					</div>

						{/* <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-brass/35 bg-ivory p-4 text-ink shadow-xl md:flex">
						<ClipboardCheck size={26} className="text-garnet" />
						<span>
							<b className="block text-sm">Survey to Install to Maintain</b>
							<small className="text-slate-500">Documented process</small>
						</span>
					</div> */}
				</div>
			</div>

			<div className="border-t border-ivory/10">
				<div className="wrap grid grid-cols-2 divide-x divide-ivory/10 md:grid-cols-4">
					{['Life-safety first', 'Integrated ELV', 'Commercial AMC', 'Clear handover'].map((item, index) => (
						<div key={item} className="flex items-center gap-3 py-5 text-sm font-semibold text-ivory/70 md:justify-start">
							<b className="inline-block w-7 text-right font-extrabold text-brass-light">0{index + 1}</b>
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Services() {
	const [filter, setFilter] = useState('All');
	const categories = ['All', 'Safety', 'Security', 'Access', 'Support'];
	const list = filter === 'All' ? services : services.filter((item) => item[0] === filter);

	return (
		<section id="solutions" className="pad">
			<div className="wrap">
				<Heading
					eyebrow="What we do"
					title="Integrated systems with practical support."
					text="From a single fault inspection to a coordinated commercial installation, we start from site requirements, not a generic catalogue."
				/>

				<div className="mb-7 flex flex-wrap gap-2" role="tablist">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setFilter(category)}
							role="tab"
							aria-selected={filter === category}
							className={`rounded-full px-5 py-3 text-sm font-bold ${
								filter === category
									? 'bg-ink text-ivory'
									: 'border border-slate-200 bg-white text-slate-600 hover:border-garnet'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{list.map(([category, Icon, title, desc], i) => (
						<article
							key={title}
							className="group card-moderne flex min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-6"
						>
							<div className="mb-6 flex justify-between">
								<span className="grid h-12 w-12 place-items-center rounded-2xl bg-garnet/10 text-garnet transition group-hover:bg-ink group-hover:text-brass-light">
									<Icon size={24} />
								</span>
								<span className="text-xs font-bold text-slate-300">0{i + 1}</span>
							</div>
							<small className="mb-2 uppercase tracking-widest text-garnet">{category}</small>
							<h3 className="text-xl font-extrabold leading-tight text-ink">{title}</h3>
							<p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{desc}</p>
							<a href="#contact" className="mt-5 text-sm font-bold text-garnet">
								Request inspection <ArrowUpRight className="inline" size={15} />
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function Process() {
	const steps = [
		['01', 'Survey', 'Map fire zones, camera coverage, access points, cabling routes and existing equipment.'],
		['02', 'Design', 'Plan compatible hardware, recorder capacity, storage days, network path and service access.'],
		['03', 'Integrate', 'Install, terminate and configure devices around the site layout and daily operations.'],
		['04', 'Commission', 'Test operation, playback, user access and document handover and AMC scope.'],
	];

	return (
		<section id="process" className="pad bg-ink text-ivory">
			<div className="wrap">
				<Heading
					light
					eyebrow="How we work"
					title="A clear process from first visit to handover."
					text="Planning first reduces coverage gaps, compatibility surprises and avoidable maintenance problems later."
				/>

				<div className="grid gap-4 md:grid-cols-4">
					{steps.map(([number, title, description], i) => (
						<article key={number} className="rounded-3xl border border-ivory/10 bg-ivory/[.04] p-6">
							<div className="mb-8 flex justify-between">
								<b className="font-display text-5xl text-brass-light">{number}</b>
								{i < 3 && <ArrowRight className="text-garnet" />}
							</div>
							<h3 className="text-xl font-extrabold">{title}</h3>
							<p className="mt-3 text-sm leading-6 text-ivory/65">{description}</p>
						</article>
					))}
				</div>

				<div className="mt-8 flex flex-col justify-between gap-4 rounded-3xl border border-brass/40 bg-brass/95 p-6 text-ink sm:flex-row sm:items-center sm:p-8">
					<div>
						<small className="font-bold uppercase tracking-widest">Start with a site survey</small>
						<h3 className="mt-2 text-2xl font-extrabold">Know what your site needs before you buy.</h3>
					</div>
					<a href="#contact" className="rounded-full bg-ink px-6 py-4 text-center font-bold text-ivory">
						Plan my survey
					</a>
				</div>
			</div>
		</section>
	);
}

function ProductGallery() {
	const items = [
		[
			'Fire alarm panels & field devices',
			'Conventional/addressable panels, smoke and heat detectors, MCPs, hooters and sounders.',
			'https://srksystem.com/images/product-fire-panel.webp',
		],
		[
			'CCTV, DVR/NVR & storage',
			'IP, dome and bullet cameras, recorder commissioning, storage planning and mobile viewing.',
			'https://srksystem.com/images/product-cctv-system.webp',
		],
		[
			'Biometric & access control',
			'Attendance devices, card readers, EM locks, exit switches and user enrollment.',
			'https://srksystem.com/images/product-access-control.webp',
		],
		[
			'Detection & specialist devices',
			'Smoke detection, interfaces, accessories and fault identification support.',
			'https://srksystem.com/images/product-detection-network.webp',
		],
	];

	return (
		<section className="pad bg-white">
			<div className="wrap">
				<Heading
					eyebrow="Products & systems"
					title="The right equipment for each environment."
					text="Explore categories featured on SRK Systems. Final product choices depend on site needs, compatibility and availability."
				/>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{items.map(([title, desc, img]) => (
						<article
							key={title}
							className="card-moderne overflow-hidden rounded-3xl border border-slate-200 bg-mist"
						>
							<img src={img} alt={title} loading="lazy" className="h-48 w-full object-cover" />
							<div className="p-5">
								<h3 className="text-xl font-extrabold leading-tight text-ink">{title}</h3>
								<p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
								<a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-garnet">
									Ask about this system <ArrowRight size={15} />
								</a>
							</div>
						</article>
					))}
				</div>

				<p className="mt-4 text-xs text-slate-400">
					Product images are displayed from srksystem.com. Brand and product availability are confirmed
					during survey or quotation.
				</p>
			</div>
		</section>
	);
}

function About() {
	const items = [
		[
			'Survey before selection',
			'Review panel status, camera blind spots, network readiness and recorder capacity.',
		],
		[
			'Compatibility-conscious hardware',
			'Choose product lines based on existing systems, availability and support routes.',
		],
		[
			'Useful service records',
			'Document testing, user access, warranty notes and AMC scope for facility teams.',
		],
	];

	return (
		<section id="about" className="pad">
			<div className="wrap grid items-center gap-12 lg:grid-cols-2">
				<div className="relative">
					<img
						src="https://srksystem.com/images/factory-warehouse-installation.webp"
						alt="Technician working with technical equipment"
						className="h-[350px] w-full rounded-[30px] object-cover sm:h-[460px]"
					/>
					<div className="absolute -bottom-5 right-4 rounded-2xl border border-brass/40 bg-ivory p-5 shadow-soft">
						<b className="text-sm text-ink">
							<Check className="mr-2 inline text-garnet" />
							Support-ready handover
						</b>
						<p className="mt-2 max-w-[230px] text-xs leading-5 text-slate-500">
							Testing, access details, service notes and AMC scope documented as agreed.
						</p>
					</div>
				</div>

				<div>
					<Heading
						eyebrow="Why SRK Systems"
						title="Good installation is only the beginning."
						text="Security and life-safety systems need to be understandable, testable and maintainable long after commissioning."
					/>

					<div className="space-y-4">
						{items.map(([title, description]) => (
							<div key={title} className="flex gap-4 border-b border-slate-200 pb-4">
								<span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-garnet/10 text-garnet">
									<Check size={16} />
								</span>
								<div>
									<h3 className="font-extrabold text-ink">{title}</h3>
									<p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
								</div>
							</div>
						))}
					</div>

					<p className="mt-5 text-xs leading-5 text-slate-500">
						Independent local service provider. Brand availability, warranty route, compatibility and
						final scope are confirmed during survey or quotation.
					</p>
				</div>
			</div>
		</section>
	);
}

function AMC() {
	const plans = [
		[
			'Fire Alarm Support AMC',
			'For commercial fire alarm systems',
			['Panel status checks', 'Detector / MCP review', 'Hooter and sounder checks where safe', 'Fault observations and service notes'],
		],
		[
			'Commercial CCTV AMC',
			'For factories, warehouses and offices',
			['Scheduled maintenance visits', 'Remote support options', 'HDD and storage checks', 'Service report after visits'],
		],
		[
			'Integrated ELV AMC',
			'For multi-system commercial sites',
			['Fire alarm + CCTV + access support', 'Multi-system inspection', 'Priority support options', 'Consolidated handover notes'],
		],
	];

	return (
		<section id="amc" className="pad bg-white">
			<div className="wrap">
				<Heading
					eyebrow="Maintenance plans"
					title="Support that fits your site."
					text="AMC scope and pricing are quoted after equipment condition, site size, visit frequency and service needs are reviewed."
				/>

				<div className="grid gap-5 lg:grid-cols-3">
					{plans.map(([title, desc, items], i) => (
						<article
							key={title}
							className={`rounded-3xl border p-7 ${
								i === 1 ? 'border-ink bg-ink text-ivory shadow-soft' : 'border-slate-200 bg-mist'
							}`}
						>
							<span
								className={`grid h-12 w-12 place-items-center rounded-2xl ${
									i === 1 ? 'bg-ivory/10 text-brass' : 'bg-garnet/10 text-garnet'
								}`}
							>
								<ClipboardCheck />
							</span>

							<h3 className="mt-6 text-2xl font-extrabold leading-tight">{title}</h3>
							<p className={`mt-2 text-sm ${i === 1 ? 'text-ivory/65' : 'text-slate-600'}`}>{desc}</p>

							<p className={`my-5 border-y py-4 text-sm font-bold ${i === 1 ? 'border-ivory/20' : 'border-slate-200'}`}>
								Quotation after site visit
							</p>

							<ul className="mb-6 space-y-3">
								{items.map((item) => (
									<li key={item} className={`text-sm ${i === 1 ? 'text-ivory/80' : 'text-slate-600'}`}>
										<Check size={16} className="mr-2 inline text-garnet" />
										{item}
									</li>
								))}
							</ul>

							<a
								href={wa(`Hello SRK Systems, please arrange a site assessment and quotation for ${title}.`)}
								target="_blank"
								rel="noreferrer"
								className={`block rounded-full px-5 py-4 text-center text-sm font-bold ${
									i === 1 ? 'bg-brass text-ink' : 'bg-ink text-ivory hover:bg-garnet'
								}`}
							>
								Ask for a quote
							</a>
						</article>
					))}
				</div>

				<p className="mt-5 text-xs leading-5 text-slate-500">
					Spare parts, replacement devices, new cabling and major rewiring are charged separately unless
					included in the written quotation.
				</p>
			</div>
		</section>
	);
}

function Sectors() {
	const sectors = [
		'Factories & production',
		'Warehouses & logistics',
		'Corporate offices',
		'Retail chains',
		'Schools & colleges',
		'Apartments & communities',
		'Hospitals & laboratories',
		'Hotels & commercial kitchens',
	];

	return (
		<section className="py-16">
			<div className="wrap grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
				<div>
					<p className="mb-3 text-xs font-bold uppercase tracking-widest text-garnet">Who we support</p>
					<h2 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">Built around real-world sites.</h2>
					<p className="mt-4 text-sm leading-6 text-slate-600">
						Solutions for operational environments where safety, visibility and reliable system access matter
						every day.
					</p>
				</div>

				<div className="grid gap-3 sm:grid-cols-2">
					{sectors.map((sector, i) => (
						<div key={sector} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
							<div className="flex items-center gap-3">
								<span className="grid h-9 w-9 place-items-center rounded-xl bg-garnet/10 text-garnet">
									{i % 2 ? <Network size={18} /> : <Building2 size={18} />}
								</span>
								<b className="text-sm text-ink">{sector}</b>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function FAQ() {
	const [active, setActive] = useState(0);

	return (
		<section className="pad">
			<div className="wrap grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
				<div>
					<Heading
						eyebrow="Common questions"
						title="Know before you start."
						text="Tell us your site type, location and system issue and we can help define the next step."
					/>
				</div>

				<div className="space-y-3">
					{faqs.map(([question, answer], i) => (
						<div key={question} className="rounded-2xl border border-slate-200 bg-white">
							<button
								onClick={() => setActive(active === i ? -1 : i)}
								aria-expanded={active === i}
								className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-ink"
							>
								{question}
								<ChevronDown className={`shrink-0 transition ${active === i ? 'rotate-180 text-garnet' : ''}`} />
							</button>
							{active === i && <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{answer}</p>}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Contact() {
	const [form, setForm] = useState({
		name: '',
		company: '',
		service: 'Fire alarm system',
		location: '',
		details: '',
	});
	const [notice, setNotice] = useState('');

	const change = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	function submit(event) {
		event.preventDefault();

		if (!form.name.trim() || !form.location.trim()) {
			setNotice('Please enter your name and site location.');
			return;
		}

		const message = `Hello SRK Systems, I would like to discuss a site requirement.\\nName: ${form.name}\\nOrganisation/site: ${form.company || 'Not provided'}\\nService: ${form.service}\\nLocation: ${form.location}\\nDetails: ${form.details || 'Please contact me to discuss.'}`;
		window.open(wa(message), '_blank', 'noopener,noreferrer');
		setNotice('WhatsApp opened with your enquiry prepared. Please press Send in WhatsApp to contact SRK Systems.');
	}

	return (
		<section id="contact" className="pad bg-ink pb-24 text-ivory md:pb-20">
			<div className="wrap grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
				<div>
					<Heading
						light
						eyebrow="Let's talk about your site"
						title="Start with a clear requirement."
						text="Share your location and the system you need help with to begin an inspection or quotation conversation."
					/>

					<div className="space-y-4">
						<a href={`tel:+91${PHONE}`} className="flex items-center gap-4 rounded-2xl border border-ivory/10 bg-ivory/[.04] p-4">
							<Phone className="text-brass-light" />
							<span>
								<small className="block text-ivory/55">Call SRK Systems</small>
								<b>{PHONE}</b>
								<small className="block text-ivory/55">Alternate: {ALT}</small>
							</span>
						</a>

						<a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-ivory/10 bg-ivory/[.04] p-4">
							<Zap className="text-brass-light" />
							<span>
								<small className="block text-ivory/55">Email</small>
								<b className="break-all text-sm">{EMAIL}</b>
							</span>
						</a>

						<div className="flex items-start gap-4 rounded-2xl border border-ivory/10 bg-ivory/[.04] p-4">
							<MapPin className="shrink-0 text-brass-light" />
							<span className="text-sm leading-6">{ADDRESS}</span>
						</div>

						<div className="overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/[.04]">
							<iframe
								title="SRK Systems location map"
								src={MAP_EMBED_URL}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="h-64 w-full border-0"
							/>
							<a
								href={MAP_LINK_URL}
								target="_blank"
								rel="noreferrer"
								className="block border-t border-ivory/10 px-4 py-3 text-sm font-semibold text-brass-light hover:text-ivory"
							>
								Open in Google Maps
							</a>
						</div>
					</div>
				</div>

				<form onSubmit={submit} className="rounded-[28px] bg-ivory p-6 text-ink shadow-2xl sm:p-8">
					<h3 className="font-display text-4xl font-semibold leading-tight">Request a site survey</h3>
					<p className="mb-6 mt-2 text-sm text-slate-500">A few details help us understand the requirement.</p>

					<div className="grid gap-4 sm:grid-cols-2">
						{[
							['name', 'Your name *', 'Name'],
							['company', 'Company / site', 'Company or building'],
							['location', 'Site location *', 'Area / city'],
						].map(([name, label, placeholder]) => (
							<label key={name} className={`text-xs font-bold text-slate-600 ${name === 'location' ? 'sm:col-span-2' : ''}`}>
								{label}
								<input
									required={name !== 'company'}
									name={name}
									value={form[name]}
									onChange={change}
									placeholder={placeholder}
									className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-garnet focus:ring-2 focus:ring-garnet/15"
								/>
							</label>
						))}

						<label className="text-xs font-bold text-slate-600 sm:col-span-2">
							Service needed
							<div className="service-select-wrap mt-2">
								<select
									name="service"
									value={form.service}
									onChange={change}
									className="service-select w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-11 text-sm font-normal"
								>
									{[
										'Fire alarm system',
										'Fire hydrant / suppression coordination',
										'CCTV installation / upgrade',
										'CCTV AMC',
										'DVR / NVR or storage upgrade',
										'Biometric attendance',
										'Access control',
										'Integrated ELV / network',
										'Other / not sure',
									].map((service) => (
										<option key={service}>{service}</option>
									))}
								</select>
								<ChevronDown aria-hidden="true" className="service-select-chevron" size={17} />
							</div>
						</label>

						<label className="text-xs font-bold text-slate-600 sm:col-span-2">
							More details
							<textarea
								name="details"
								value={form.details}
								onChange={change}
								rows="3"
								placeholder="Site type, issue, number of cameras, timeline..."
								className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-garnet"
							/>
						</label>
					</div>

					{notice && <p role="status" className="mt-4 rounded-xl bg-garnet/10 p-3 text-sm text-ink">{notice}</p>}

					<button className="mt-5 w-full rounded-full bg-ink px-6 py-4 font-bold text-ivory hover:bg-garnet">
						Prepare WhatsApp enquiry
					</button>
					<p className="mt-3 text-center text-xs leading-5 text-slate-400">
						This opens WhatsApp with a prefilled message. It does not store leads or send until you press
						Send.
					</p>
				</form>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="border-t border-brass/30 bg-ivory/90 py-8 text-ink backdrop-blur-xl">
			<div className="wrap flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
				<a href="#home">
					<BrandLockup compact />
				</a>

				<div className="flex gap-5 text-xs font-semibold text-slate-600">
					<a href="#solutions">Solutions</a>
					<a href="#amc">AMC</a>
					<a href="#contact">Contact</a>
				</div>

				<p className="text-xs text-slate-500">© {new Date().getFullYear()} SRK Systems · Chennai</p>
			</div>
		</footer>
	);
}

function Floating() {
	return (
		<div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-2 sm:flex">
			<a
				href={wa()}
				target="_blank"
				rel="noreferrer"
				className="rounded-full bg-[#25D366] px-4 py-3 text-base font-bold text-white shadow-xl"
			>
				<span className="hidden sm:inline">WhatsApp us</span>
			</a>
			<a
				href={`tel:+91${PHONE}`}
				className="rounded-full bg-brass px-4 py-3 text-base font-bold text-ink shadow-xl"
			>
				<Phone className="inline" size={17} /> <span className="hidden sm:inline">Call now</span>
			</a>
		</div>
	);
}

export default function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<Process />
				<ProductGallery />
				<About />
				<Sectors />
				<AMC />
				<FAQ />
				<Contact />
			</main>
			<Footer />
			<Floating />
		</>
	);
}
