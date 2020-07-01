<?php
$EM_CONF[$_EXTKEY] = [
   'title' => 'r o n l i n e TYPO3 Base Sitepackage',
   'description' => 'A TYPO3 Base Sitepackage is a good start for a customized Typo3-Template.',
   'category' => 'templates',
   'author' => 'r o n l i n e DEV',
   'author_email' => 'ron@ronline.eu',
   'author_company' => 'r o n l i n e DEV',
   'version' => '1.0.0',
   'state' => 'stable',
   'constraints' => [
      'depends' => [
         'typo3' => '10.4.0-10.4.99',
         'fluid_styled_content' => '10.4.0-10.4.99'
      ],
      'conflicts' => [
      ],
   ],
   'uploadfolder' => 0,
   'createDirs' => '',
   'clearCacheOnLoad' => 1
];