import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <div class="logo">BrandName</div>
    </header>
    
    <main>
      <div class="hero">
        <div class="hero-content">
          <h1>Unlock the Secrets to Success</h1>
          <p class="subtitle">Join thousands of professionals who have transformed their careers with our proven strategies.</p>
          
          <div class="signup-form">
            <h2>Get Your FREE Ultimate Guide</h2>
            <p>Enter your details below to receive instant access to our exclusive resource.</p>
            <form id="email-form">
              <input type="text" id="name" placeholder="Your full name" required>
              <input type="email" id="email" placeholder="Your email address" required>
              <button type="submit">Get My Free Guide</button>
            </form>
            <p class="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        <div class="hero-image">
          <img src="/ebook-cover.png" alt="Ultimate Guide Cover">
        </div>
      </div>
      
      <div class="benefits">
        <div class="benefit">
          <h3>Proven Strategies</h3>
          <p>Learn techniques that have worked for thousands of professionals.</p>
        </div>
        <div class="benefit">
          <h3>Expert Insights</h3>
          <p>Get advice from industry leaders with decades of experience.</p>
        </div>
        <div class="benefit">
          <h3>Actionable Steps</h3>
          <p>Follow our simple, step-by-step process to see results quickly.</p>
        </div>
      </div>
    </main>
    
    <footer>
      <p>&copy; 2023 BrandName. All rights reserved.</p>
    </footer>
  </div>
`

// Form submission handler
document.getElementById('email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  // Here you would typically send the email to your server or email service
  console.log('Form submitted:', { name, email });
  
  // Show success message
  const form = document.querySelector('.signup-form');
  form.innerHTML = `
    <h2>Thank You, ${name}!</h2>
    <p>Your guide has been sent to <strong>${email}</strong></p>
    <p>Check your inbox (and spam folder) for your download link.</p>
  `;
});
