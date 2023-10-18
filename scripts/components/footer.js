class AppFooter extends ModularityComponent {
  render() {
    return `
    <footer class="footer">
      <section>
        <h2>Våre samarbeidspartnere</h2>
        <div class="footer-brands">
          <img src="./images/sponsor-icons/kulturrådet.png" alt="Placeholder">
          <img src="./images/sponsor-icons/den-lille-basun.png" alt="Placeholder">
          <img src="./images/sponsor-icons/norsk-jazzforum.png" alt="Placeholder">
          <img src="./images/sponsor-icons/homeworkspace.png" alt="Placeholder">
        </div>
      </section>
      <section>
        <h2>Finn oss på sosiale medier</h2>
        <div class="footer-social-links">
          <a class="footer-icon" href="https://www.facebook.com/DetNyeNorskeStorband" target="_blank"><img src="./images/icons/facebook.svg" alt="Facebook"></a>
          <a class="footer-icon" href="https://www.instagram.com/detnyensb/" target="_blank"><img src="./images/icons/instagram.svg" alt="Instagram"></a>
          <a class="footer-icon" href="https://open.spotify.com/artist/07RkGtZNwFOTFyVFEw4cMY" target="_blank"><img src="./images/icons/spotify.svg" alt="Spotify"></a>
          <a class="footer-icon" href="https://www.youtube.com/channel/UC_oSKvnF9HaQI5ZJ6ntxgJA/featured" target="_blank"><img src="./images/icons/youtube.svg" alt="Youtube"></a>
        </div>
      </section>
    </footer>
    `
  }
}

registerModularityComponent('app-footer', AppFooter)