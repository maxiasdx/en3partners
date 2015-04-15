<?php

function opigno_class_app_views_pre_render(&$view) {
  Global $user;
  if ($view->name == "opigno_my_courses") {
    $query = opigno_class_app_get_my_classes($user->uid);
    $result = $query->execute();
    $records = $result->fetchAll();
    foreach ($view->result as $index1 => &$display_item) {
      $im_in_group = FALSE;
      foreach ($records as $index2 => $record) {
        if ($record->nid == $display_item->opigno_class_courses_node_nid) {
          $im_in_group = TRUE;
        }
      }
      if ($im_in_group == FALSE) {
        $display_item->opigno_class_courses_node_title = NULL;
        $display_item->opigno_class_courses_node_nid = NULL;
        if (opigno_class_app_course_already_listed($view->result, $index1, $display_item->node_og_membership_nid)) {
          unset($view->result[$index1]);
        }
      }
    }
  }
}

function opigno_class_app_course_already_listed($results, $index, $node_og_membership_nid) {
  $already_exists = FALSE;
  foreach ($results as $index1 => $display_item) {
    if (($index1 != $index) && ($display_item->node_og_membership_nid == $node_og_membership_nid) && (($display_item->opigno_class_courses_node_nid == NULL) || ($results['index']->opigno_class_courses_node_nid == NULL))) {
      $already_exists = TRUE;
    }
  }
  return $already_exists;
}

function opigno_class_app_get_my_classes($userid) {
  $query = db_select('og_membership', 'og');
  $query->condition('og.state', '1', '=');
  $query->condition('og.group_type', 'node', '=');
  $query->condition('og.entity_type', 'user', '=');
  $query->condition('og.etid', $userid, '=');
  $query->join('node', 'n', 'n.nid = og.gid');
  $query->condition('n.type', 'class', '=');
  $query->addField('n', 'nid', 'nid');
  return $query;
}
