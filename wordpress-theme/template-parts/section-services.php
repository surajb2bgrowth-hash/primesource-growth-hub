<?php
/**
 * Services Section Template
 *
 * @package PrimeSource
 */

// Default services if none exist in WordPress
$default_services = array(
    array(
        'title' => 'IT Staffing Solutions',
        'description' => 'Find the perfect IT professionals for your team with our comprehensive staffing solutions.',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    ),
    array(
        'title' => 'Web Development',
        'description' => 'Custom web applications and websites built with modern technologies and best practices.',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    ),
    array(
        'title' => 'Digital Marketing',
        'description' => 'Strategic digital marketing campaigns that drive traffic, leads, and conversions.',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    ),
    array(
        'title' => 'Business Automation',
        'description' => 'Streamline your operations with intelligent automation solutions that save time and reduce costs.',
        'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    ),
);

// Try to get services from custom post type
$services_query = new WP_Query(array(
    'post_type'      => 'service',
    'posts_per_page' => 4,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
));
?>

<section id="services" class="services-section section">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e('Our Services', 'primesource'); ?></h2>
            <p><?php esc_html_e('Comprehensive IT solutions tailored to your business needs', 'primesource'); ?></p>
        </div>

        <div class="services-grid">
            <?php if ($services_query->have_posts()) : ?>
                <?php while ($services_query->have_posts()) : $services_query->the_post(); ?>
                    <div class="service-card animate-fade-up">
                        <div class="service-icon">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('thumbnail'); ?>
                            <?php else : ?>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
                            <?php endif; ?>
                        </div>
                        <h3><?php the_title(); ?></h3>
                        <p><?php echo esc_html(get_the_excerpt()); ?></p>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ($default_services as $index => $service) : ?>
                    <div class="service-card animate-fade-up animate-delay-<?php echo ($index + 1) * 100; ?>">
                        <div class="service-icon">
                            <?php echo $service['icon']; ?>
                        </div>
                        <h3><?php echo esc_html($service['title']); ?></h3>
                        <p><?php echo esc_html($service['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
