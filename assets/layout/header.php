<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title><?php echo $config['app']['title']; ?></title>

		<link rel="stylesheet" href="assets/css/main.css">
		<link rel="stylesheet" href="assets/css/font-awesome.min.css">
	</head>
	<body>
		<div id="page_wrap">
			<div class="header">
				<div class="overlay"></div>
				<div class="layer"></div>
				<div class="menu">
					<div class="menu-left">
						<div class="brand">
							<a href="#">DevelopJS</a>
						</div>
					</div>
					<div class="menu-right">
						<div class="btn <?php echo ($page == 'home' ? 'active' : ''); ?>"><a href="#">Home</a></div>
						<div class="btn <?php echo ($page == 'about' ? 'active' : ''); ?>"><a href="#">About</a></div>
						<div class="btn <?php echo ($page == 'team' ? 'active' : ''); ?>"><a href="#">Team</a></div>
						<div class="btn <?php echo ($page == 'projects' ? 'active' : ''); ?>"><a href="#">Projects</a></div>
						<div class="btn <?php echo ($page == 'community' ? 'active' : ''); ?>"><a href="#">Community</a></div>
					</div>
				</div>
				<div class="pull"><i class="fa fa-bars"></i></div>
				<div class="header-container">
					<h1>Welcome to DevelopJS</h1>
					<p>Providing resources for the Javascript Development Community</p>
				</div>
			</div>
		</div>
