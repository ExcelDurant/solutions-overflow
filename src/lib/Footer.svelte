<script>
import { appName } from "./utils";


</script>

<footer>
	<div class="footer-container">
		<div class="top-sec">
			<div class="colu-1 colu">
				<div class="logo-container no-overflow">
					<img src="logo.png" alt="logo" class="full-img">
				</div>
				<p class="txt">
					{appName} is a social questions & Answers Engine which will help you solve exam related questions and permit you to help others answer their questions
				</p>
			</div>
			<div class="colu-2 colu">
				<h3 class="title">About Us</h3>
				<ul class="footer-list">
					<li><a href="/" class="footer-link">Meet The Team</a></li>
					<li><a href="/posts" class="footer-link">Blog</a></li>
					<li><a href="/about" class="footer-link">About Us</a></li>
					<li><a href="/contact" class="footer-link">Contact Us</a></li>
				</ul>
			</div>
			<div class="colu-3 colu">
				<h3 class="title">Legal Stuff</h3>
				<ul class="footer-list">
					<li><a href="/" class="footer-link">Terms of Use</a></li>
					<li><a href="/" class="footer-link">Privacy Policy</a></li>
					<li><a href="/" class="footer-link">Cookie Policy</a></li>
				</ul>
			</div>
			<div class="colu-4 colu">
				<h3 class="title">Help</h3>
				<ul class="footer-list">
					<li><a href="/" class="footer-link">Knowledge Base</a></li>
					<li><a href="/" class="footer-link">Support</a></li>
				</ul>
			</div>
			<div class="colu-5 colu">
				<h3 class="title">Follow</h3>
				<div class="socials-container">
					<a href="https://twitter.com/DurantExcel" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
					<a href="https://www.facebook.com/excel.gnopa/" target="_blank" class="social-link"><i class="fab fa-facebook-f"></i></a>
					<a href="https://www.instagram.com/troptop_ex/" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
					<a href="https://www.linkedin.com/in/excel-gnopa-b5a8161b3/" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</div>
		<div class="bottom-sec">
			<div class="txt-container">
				<h4 class="rights">© 2022 Solutions Overflow. All Rights Reserved</h4>
				<h6 class="author">With love by <a href="https://gnopaexcel.netlify.app/" target="_blank" rel="noopener">Excel</a></h6>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@import "../styles";
	footer {
		width: 100%;
		border-top: 1px solid rgb(201, 201, 201);
	}
	.footer-container {
		width: 100%;
	}

	.top-sec {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 50px 40px;
		border-bottom: 1px solid rgb(201, 201, 201);
		// align-items: center;
		.colu {
			.title {
				font-size: 1rem;
				font-weight: 600;
				margin-bottom: 20px;
			}
			.footer-list {
				padding: 0;
				.footer-link {
					color: gray;
					font-size: 0.8rem;
					&:hover {
						color: var(--bluish);
					}
				}
			}
			.socials-container {
				.social-link {
					padding: 5px 10px;
					border-radius: 50%;
					background-color: var(--bluish);
					color: white;
					text-align: center;
					&:hover {
						background-color: var(--text-color);
					}
				}
			}
		}
		.colu-1 {
			width: 30%;
			display: flex;
			// align-items: center;
			.logo-container {
				min-width: 50px;
				height: 50px;
				margin-right: 10px;
				@include mqx(900px) {
					width: 40px;
					height: 40px;
				}
			}
			.txt {
				font-size: 0.9rem;
			}
		}

		@include mqx(900px) {
			flex-direction: column;
			padding: 20px 5px;
			.colu {
				width: 100%;
				margin-bottom: 20px;
			}
		}
	}

	.bottom-sec {
		width: 100%;
		padding: 20px 0;
		.txt-container {
			// display: inline-block;
			width: fit-content;
			margin: 0 auto;
			text-align: center;
			color: gray;
			.rights {
				font-size: 0.9rem;
				margin-bottom: 10px;
			}
			.author {
				font-size: 0.8rem;
			}
		}
	}
</style>