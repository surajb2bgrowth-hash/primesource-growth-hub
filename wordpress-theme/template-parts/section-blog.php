<?php
/**
 * Blog Section Template
 *
 * @package PrimeSource
 */

$blog_query = new WP_Query(array(
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'orderby'        => 'date',
    'order'          => 'DESC',
));
?>

<section id="blog" class="blog-section section">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e('Latest Insights', 'primesource'); ?></h2>
            <p><?php esc_html_e('Stay updated with the latest trends and insights in IT and technology', 'primesource'); ?></p>
        </div>

        <div class="blog-grid">
            <?php if ($blog_query->have_posts()) : ?>
                <?php $delay = 1; ?>
                <?php while ($blog_query->have_posts()) : $blog_query->the_post(); ?>
                    <article class="blog-card animate-fade-up animate-delay-<?php echo $delay * 100; ?>">
                        <div class="blog-image">
                            <?php if (has_post_thumbnail()) : ?>
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium_large'); ?>
                                </a>
                            <?php else : ?>
                                <a href="<?php the_permalink(); ?>">
                                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/blog-placeholder.jpg'); ?>" alt="<?php the_title_attribute(); ?>">
                                </a>
                            <?php endif; ?>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span class="blog-date"><?php echo get_the_date(); ?></span>
                                <span class="blog-author"><?php the_author(); ?></span>
                            </div>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <p><?php echo esc_html(wp_trim_words(get_the_excerpt(), 20)); ?></p>
                            <a href="<?php the_permalink(); ?>" class="read-more">
                                <?php esc_html_e('Read More', 'primesource'); ?> →
                            </a>
                        </div>
                    </article>
                    <?php $delay++; ?>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php else : ?>
                <p class="no-posts"><?php esc_html_e('No blog posts yet. Check back soon!', 'primesource'); ?></p>
            <?php endif; ?>
        </div>

        <?php if ($blog_query->have_posts()) : ?>
            <div style="text-align: center; margin-top: 3rem;">
                <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="btn btn-secondary">
                    <?php esc_html_e('View All Posts', 'primesource'); ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>
