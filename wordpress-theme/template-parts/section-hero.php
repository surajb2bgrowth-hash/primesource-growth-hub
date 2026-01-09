<?php
/**
 * Hero Section Template
 *
 * @package PrimeSource
 */

$hero_title = get_theme_mod('hero_title', 'Transform Your Business with <span>Expert IT Solutions</span>');
$hero_desc = get_theme_mod('hero_description', 'We deliver cutting-edge technology services, staffing solutions, and digital marketing strategies to help your business thrive in the digital age.');
$hero_btn_text = get_theme_mod('hero_button_text', 'Get Started');
$hero_btn_link = get_theme_mod('hero_button_link', '#contact');
?>

<section id="hero" class="hero-section">
    <div class="container">
        <div class="hero-content animate-fade-up">
            <h1><?php echo wp_kses_post($hero_title); ?></h1>
            <p><?php echo esc_html($hero_desc); ?></p>
            <div class="hero-buttons">
                <a href="<?php echo esc_url($hero_btn_link); ?>" class="btn btn-primary">
                    <?php echo esc_html($hero_btn_text); ?>
                </a>
                <a href="#services" class="btn btn-secondary">
                    <?php esc_html_e('Our Services', 'primesource'); ?>
                </a>
            </div>
        </div>
    </div>
</section>
