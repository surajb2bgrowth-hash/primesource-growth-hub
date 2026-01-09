<?php
/**
 * Case Studies Section Template
 *
 * @package PrimeSource
 */

// Default case studies
$default_case_studies = array(
    array(
        'title'    => 'E-commerce Platform Transformation',
        'category' => 'Web Development',
        'excerpt'  => 'Increased online sales by 150% through a complete platform redesign and optimization.',
        'image'    => get_template_directory_uri() . '/assets/images/case-study-1.jpg',
    ),
    array(
        'title'    => 'Enterprise Staffing Solution',
        'category' => 'IT Staffing',
        'excerpt'  => 'Placed 50+ IT professionals for a Fortune 500 company\'s digital transformation initiative.',
        'image'    => get_template_directory_uri() . '/assets/images/case-study-2.jpg',
    ),
    array(
        'title'    => 'Marketing Automation Success',
        'category' => 'Digital Marketing',
        'excerpt'  => 'Achieved 300% ROI through targeted digital marketing campaigns and automation.',
        'image'    => get_template_directory_uri() . '/assets/images/case-study-3.jpg',
    ),
);

// Try to get case studies from custom post type
$case_studies_query = new WP_Query(array(
    'post_type'      => 'case_study',
    'posts_per_page' => 3,
    'orderby'        => 'date',
    'order'          => 'DESC',
));
?>

<section id="case-studies" class="case-studies-section section">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e('Case Studies', 'primesource'); ?></h2>
            <p><?php esc_html_e('See how we\'ve helped businesses achieve their goals', 'primesource'); ?></p>
        </div>

        <div class="case-studies-grid">
            <?php if ($case_studies_query->have_posts()) : ?>
                <?php while ($case_studies_query->have_posts()) : $case_studies_query->the_post(); ?>
                    <article class="case-study-card animate-fade-up">
                        <div class="case-study-image">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('medium_large'); ?>
                            <?php else : ?>
                                <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                            <?php endif; ?>
                        </div>
                        <div class="case-study-content">
                            <?php 
                            $categories = get_the_terms(get_the_ID(), 'category');
                            if ($categories && !is_wp_error($categories)) : ?>
                                <span class="case-study-category"><?php echo esc_html($categories[0]->name); ?></span>
                            <?php endif; ?>
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo esc_html(get_the_excerpt()); ?></p>
                            <a href="<?php the_permalink(); ?>" class="read-more">
                                <?php esc_html_e('Read More', 'primesource'); ?> →
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php else : ?>
                <?php foreach ($default_case_studies as $index => $study) : ?>
                    <article class="case-study-card animate-fade-up animate-delay-<?php echo ($index + 1) * 100; ?>">
                        <div class="case-study-image">
                            <img src="<?php echo esc_url($study['image']); ?>" alt="<?php echo esc_attr($study['title']); ?>">
                        </div>
                        <div class="case-study-content">
                            <span class="case-study-category"><?php echo esc_html($study['category']); ?></span>
                            <h3><?php echo esc_html($study['title']); ?></h3>
                            <p><?php echo esc_html($study['excerpt']); ?></p>
                            <a href="#" class="read-more">
                                <?php esc_html_e('Read More', 'primesource'); ?> →
                            </a>
                        </div>
                    </article>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
