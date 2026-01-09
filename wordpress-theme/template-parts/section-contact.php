<?php
/**
 * Contact Section Template
 *
 * @package PrimeSource
 */

$contact_email   = get_theme_mod('contact_email', 'info@primesourceitsc.com');
$contact_phone   = get_theme_mod('contact_phone', '+1 (555) 123-4567');
$contact_address = get_theme_mod('contact_address', '123 Business Avenue, Tech City, TC 12345');

// Check for form submission status
$form_status = isset($_GET['contact']) ? sanitize_text_field($_GET['contact']) : '';
?>

<section id="contact" class="contact-section section">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e('Get In Touch', 'primesource'); ?></h2>
            <p><?php esc_html_e('Ready to transform your business? Let\'s discuss your project.', 'primesource'); ?></p>
        </div>

        <div class="contact-grid">
            <div class="contact-info animate-fade-up">
                <h3><?php esc_html_e('Contact Information', 'primesource'); ?></h3>
                <p><?php esc_html_e('Have a question or want to work together? We\'d love to hear from you.', 'primesource'); ?></p>

                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div>
                            <strong><?php esc_html_e('Email', 'primesource'); ?></strong>
                            <p><a href="mailto:<?php echo esc_attr($contact_email); ?>"><?php echo esc_html($contact_email); ?></a></p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                        </div>
                        <div>
                            <strong><?php esc_html_e('Phone', 'primesource'); ?></strong>
                            <p><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $contact_phone)); ?>"><?php echo esc_html($contact_phone); ?></a></p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </div>
                        <div>
                            <strong><?php esc_html_e('Address', 'primesource'); ?></strong>
                            <p><?php echo esc_html($contact_address); ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-form animate-fade-up">
                <?php if ($form_status === 'success') : ?>
                    <div class="form-message success" style="padding: 1rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: var(--radius); margin-bottom: 1.5rem; color: #155724;">
                        <strong><?php esc_html_e('Thank you!', 'primesource'); ?></strong>
                        <?php esc_html_e('Your message has been sent successfully. We\'ll get back to you soon.', 'primesource'); ?>
                    </div>
                <?php elseif ($form_status === 'error') : ?>
                    <div class="form-message error" style="padding: 1rem; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: var(--radius); margin-bottom: 1.5rem; color: #721c24;">
                        <strong><?php esc_html_e('Oops!', 'primesource'); ?></strong>
                        <?php esc_html_e('There was an error sending your message. Please try again.', 'primesource'); ?>
                    </div>
                <?php endif; ?>

                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                    <input type="hidden" name="action" value="primesource_contact">
                    <?php wp_nonce_field('primesource_contact_form', 'primesource_contact_nonce'); ?>

                    <div class="form-group">
                        <label for="contact_name"><?php esc_html_e('Full Name', 'primesource'); ?> *</label>
                        <input type="text" id="contact_name" name="contact_name" required placeholder="<?php esc_attr_e('John Doe', 'primesource'); ?>">
                    </div>

                    <div class="form-group">
                        <label for="contact_email"><?php esc_html_e('Email Address', 'primesource'); ?> *</label>
                        <input type="email" id="contact_email" name="contact_email" required placeholder="<?php esc_attr_e('john@example.com', 'primesource'); ?>">
                    </div>

                    <div class="form-group">
                        <label for="contact_phone"><?php esc_html_e('Phone Number', 'primesource'); ?></label>
                        <input type="tel" id="contact_phone" name="contact_phone" placeholder="<?php esc_attr_e('+1 (555) 123-4567', 'primesource'); ?>">
                    </div>

                    <div class="form-group">
                        <label for="contact_service"><?php esc_html_e('Service Interested In', 'primesource'); ?></label>
                        <select id="contact_service" name="contact_service">
                            <option value=""><?php esc_html_e('Select a service', 'primesource'); ?></option>
                            <option value="it-staffing"><?php esc_html_e('IT Staffing Solutions', 'primesource'); ?></option>
                            <option value="web-development"><?php esc_html_e('Web Development', 'primesource'); ?></option>
                            <option value="digital-marketing"><?php esc_html_e('Digital Marketing', 'primesource'); ?></option>
                            <option value="business-automation"><?php esc_html_e('Business Automation', 'primesource'); ?></option>
                            <option value="other"><?php esc_html_e('Other', 'primesource'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="contact_message"><?php esc_html_e('Message', 'primesource'); ?> *</label>
                        <textarea id="contact_message" name="contact_message" required placeholder="<?php esc_attr_e('Tell us about your project...', 'primesource'); ?>"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%;">
                        <?php esc_html_e('Send Message', 'primesource'); ?>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
