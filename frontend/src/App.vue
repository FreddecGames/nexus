<template>
	<div class="navbar navbar-expand-lg fixed-top navbar-dark">
		<div class="container">
			<a href="../" class="navbar-brand d-flex align-items-center">
				<img src="./assets/logo.png" width="24" height="24" class="me-2">
				Freddec Games
			</a>
		</div>
	</div>
	<div id="banner" class="py-4">
		<div class="container py-4">
			<h1 class="text-light display-6 fw-bold">Freddec makes Games</h1>
			<p class="col-md-8 fs-6">I'm a french web dev who makes idle/incremental games for players and supporters. If you have any idea about remaking an old game or making a new original game, please contact me!</p>
			<div class="row g-2">
				<div class="col-auto">
					<a href="https://www.patreon.com/bePatron?u=61283131" class="btn" target="_blank">
						<div class="row gx-2 align-items-center">
							<div class="col-auto d-flex align-items-center"><img src="./assets/img/patreon.png" width="16" height="16" /></div>
							<div class="col-auto">Patreon</div>
						</div>
					</a>
				</div>
				<div class="col-auto">
					<a href="https://ko-fi.com/freddecgames" class="btn" target="_blank">
						<div class="row gx-2 align-items-center">
							<div class="col-auto d-flex align-items-center"><img src="./assets/img/kofi.svg" width="16" height="16" /></div>
							<div class="col-auto">Ko-fi</div>
						</div>
					</a>
				</div>
				<div class="col-auto">
					<a href="https://discord.gg/3UkgeeT9CV" class="btn" target="_blank">
						<div class="row gx-2 align-items-center">
							<div class="col-auto d-flex align-items-center"><img src="./assets/img/discord.png" width="16" height="16" /></div>
							<div class="col-auto">Discord</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="col container py-5">
		<div class="row g-3 justify-content-center">
			<div class="col-12 col-md-6 col-lg-3">
				<div class="card h-100">
					<div class="card-header text-light">
						<span class="fs-6">NG Space Company</span>
					</div>
					<div class="card-body d-flex flex-column">
						<p class="flex-fill card-text">Incremental space game about resource mining, interstellar exploration and system conquest</p>
                        <div class="row gx-1 align-items-center mb-3">
                            <div class="col-auto">
                                <span class="badge bg-secondary">Remake</span>
                            </div>
                            <div class="col-auto">
                                <span class="badge bg-success">Released</span>
                            </div>
                        </div>
                        <div class="row gx-1 align-items-center justify-content-end">
							<div class="col-auto">
                                <a href="https://play.google.com/store/apps/details?id=com.freddecgames.ngsc" class="btn" target="_blank">
                                    <img :src="require(`./assets/img/google_play.png`)" alt="Get it on Google Play" height="16">
                                    Google Play
                                </a>
							</div>
							<div class="col-auto">
								<a href="https://ngsc.freddecgames.com" class="btn" target="_blank">Web</a>
							</div>
                        </div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="card h-100">
					<div class="card-header text-light">
						<span class="fs-6">NG Galaxies</span>
					</div>
					<div class="card-body d-flex flex-column">
						<p class="flex-fill card-text">Clicker/Incremental game about fighting Bone Hunter fleets with space ships to free our galaxies</p>
						<div class="row gx-1 align-items-center mb-3">
							<div class="col-auto">
								<div class="row gx-1 align-items-center">
									<div class="col-auto">
										<span class="badge bg-secondary">Original</span>
									</div>
									<div class="col-auto">
										<span class="badge bg-warning">Beta Testing</span>
									</div>
								</div>
							</div>
						</div>
                        <div class="row gx-1 align-items-center justify-content-end">
							<div class="col-auto">
								<a href="https://nggalaxies.freddecgames.com" class="btn" target="_blank">Web</a>
							</div>
                        </div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="card h-100">
					<div class="card-header text-light">
						<span class="fs-6">NG Exile</span>
					</div>
					<div class="card-body d-flex flex-column">
						<p class="flex-fill card-text">Multi-player incremental game where you're fighting against the others to be the Master</p>
						<div class="row gx-1 align-items-center mb-3">
							<div class="col-auto">
								<div class="row gx-1 align-items-center">
									<div class="col-auto">
										<span class="badge bg-secondary">Remake</span>
									</div>
									<div class="col-auto">
										<span class="badge bg-secondary">Not started</span>
									</div>
								</div>
							</div>
						</div>
                        <div class="row gx-1 align-items-center justify-content-end">
							<div class="col-auto">
								<a href="/" class="btn disabled" target="_blank">Web</a>
							</div>
                        </div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="card h-100">
					<div class="card-header text-light">
						<span class="fs-6">NG Heart of Galaxy</span>
					</div>
					<div class="card-body d-flex flex-column">
						<p class="flex-fill card-text">Mining, ship building, fleet fighting to conquest all the galaxies. Be careful, you're not alone!</p>
						<div class="row gx-1 align-items-center mb-3">
							<div class="col-auto">
								<div class="row gx-1 align-items-center">
									<div class="col-auto">
										<span class="badge bg-secondary">Remake</span>
									</div>
									<div class="col-auto">
										<span class="badge bg-secondary">Not started</span>
									</div>
								</div>
							</div>
						</div>
                        <div class="row gx-1 align-items-center justify-content-end">
							<div class="col-auto">
								<a href="/" class="btn disabled" target="_blank">Web</a>
							</div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer class="bd-footer py-5 bg-dark">
		<div class="container">
			<div class="row gy-3 text-muted">
				<div class="col-lg-3">
					<a href="../" class="d-inline-flex fs-5 align-items-center mb-2 text-muted text-decoration-none">
						<img src="./assets/logo.png" width="24" height="24" class="me-2">
						Freddec Games
					</a>
					<div class="small w-75 mb-2">
						Games designed and built with all the love in the world by Freddec
					</div>
					<div class="small w-75 mb-2">
						© Freddec Games 2021. All rights reserved.
					</div>
				</div>
				<div class="col-lg-3">
					<div class="fs-5">
						Games
					</div>
					<div class="mb-2 ">
						<a href="https://ngsc.freddecgames.com" class="small text-muted text-decoration-none" target="_blank">NG Space Company</a>
					</div>
					<div class="mb-2 ">
						<a href="https://nggalaxies.freddecgames.com" class="small text-muted text-decoration-none" target="_blank">NG Galaxies</a>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="fs-5">
						Support
					</div>
					<div class="mb-2 ">
						<a href="https://www.patreon.com/bePatron?u=61283131" class="small text-muted text-decoration-none" target="_blank">Patreon</a>
					</div>
					<div class="mb-2 ">
						<a href="https://ko-fi.com/freddecgames" class="small text-muted text-decoration-none" target="_blank">Ko-fi</a>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="fs-5">
						Community
					</div>
					<div class="mb-2 ">
						<a href="https://discord.gg/3UkgeeT9CV" class="small text-muted text-decoration-none" target="_blank">Discord</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
}
</script>
