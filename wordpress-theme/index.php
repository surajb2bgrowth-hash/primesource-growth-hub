<?php
/**
 * Main Template File
 *
 * @package PrimeSource
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php if (is_front_page()) : ?>
        <?php get_template_part('template-parts/section', 'hero'); ?>
        <?php get_template_part('template-parts/section', 'services'); ?>
        <?php get_template_part('template-parts/section', 'about'); ?>
        <?php get_template_part('template-parts/section', 'case-studies'); ?>
        <?php get_template_part('template-parts/section', 'blog'); ?>
        <?php get_template_part('template-parts/section', 'contact'); ?>
    <?php else : ?>
        <div class="container section">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                        </header>

                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <?php the_post_thumbnail('large'); ?>
                            </div>
                        <?php endif; ?>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>

                <?php the_posts_navigation(); ?>
            <?php else : ?>
                <p><?php esc_html_e('No content found.', 'primesource'); ?></p>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
