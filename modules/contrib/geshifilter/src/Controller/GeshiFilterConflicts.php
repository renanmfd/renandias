<?php

namespace Drupal\geshifilter\Controller;

use Drupal\geshifilter\GeshiFilterConflicts;
use Drupal\Core\Controller\ControllerBase;

/**
 * Show the filters tah conflic with GeshiFilter.
 */
class GeshiFilterConflicts extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  public function content() {
    $conflicts = GeshiFilterConflicts::listConflicts();
    if (count($conflicts) == 0) {
      $build = array(
        '#type' => 'markup',
        '#markup' => t('No conflicts found.'),
      );
      return $build;
    }
    else {
      return array();
    }
  }

}
