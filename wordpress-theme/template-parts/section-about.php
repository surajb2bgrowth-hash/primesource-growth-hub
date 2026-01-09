<?php
/**
 * About Section Template
 *
 * @package PrimeSource
 */
?>

<section id="about" class="about-section section">
    <div class="container">
        <div class="about-grid">
            <div class="about-image animate-fade-up">
                <?php 
                $about_image = get_theme_mod('about_image');
                if ($about_image) : ?>
                    <img src="<?php echo esc_url($about_image); ?>" alt="<?php esc_attr_e('About PrimeSource IT', 'primesource'); ?>">
                <?php else : ?>
                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/about-team.jpg'); ?>" alt="<?php esc_attr_e('About PrimeSource IT', 'primesource'); ?>">
                <?php endif; ?>
            </div>

            <div class="about-content animate-fade-up">
                <h2><?php esc_html_e('About PrimeSource IT Consulting', 'primesource'); ?></h2>
                <p>
                    <?php esc_html_e('With over a decade of experience in the IT industry, PrimeSource IT Consulting has established itself as a trusted partner for businesses seeking innovative technology solutions.', 'primesource'); ?>
                </p>
                <p>
                    <?php esc_html_e('Our team of certified professionals is dedicated to delivering exceptional service and measurable results. We combine technical expertise with strategic thinking to help our clients achieve their business objectives.', 'primesource'); ?>
                </p>

                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">10+</span>
                        <span class="stat-label"><?php esc_html_e('Years Experience', 'primesource'); ?></span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">500+</span>
                        <span class="stat-label"><?php esc_html_e('Projects Completed', 'primesource'); ?></span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">150+</span>
                        <span class="stat-label"><?php esc_html_e('Happy Clients', 'primesource'); ?></span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label"><?php esc_html_e('Team Members', 'primesource'); ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
