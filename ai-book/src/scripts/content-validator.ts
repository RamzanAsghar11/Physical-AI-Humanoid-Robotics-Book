/**
 * Content Validation Script for Physical AI & Humanoid Robotics Course
 * Ensures all content follows conceptual/theory only requirements
 * No practical ROS, Gazebo, Node.js, or Docusaurus instructions
 */

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class ContentValidator {
  // Keywords that should NOT appear in conceptual content
  private static readonly forbiddenKeywords = [
    'install', 'setup', 'configure', 'run', 'execute', 'npm install',
    'pip install', 'docker', 'command', 'terminal', 'console',
    'code block', 'function', 'class', 'method', 'variable',
    'ROS 2 command', 'ros2 run', 'ros2 launch', 'colcon build',
    'Gazebo command', 'gazebo --verbose', 'URDF', 'SDF',
    'Unity scene', 'Unity editor', 'Unity asset',
    'Isaac command', 'isaac sim', 'isaac launch'
  ];

  // Keywords that SHOULD appear in conceptual content
  private static readonly conceptualKeywords = [
    'concept', 'principle', 'theory', 'framework', 'architecture',
    'approach', 'methodology', 'paradigm', 'model', 'design',
    'system', 'component', 'algorithm', 'process', 'technique',
    'strategy', 'philosophy', 'foundation', 'understanding'
  ];

  /**
   * Validates content to ensure it follows conceptual/theory only requirements
   */
  public static validateContent(content: string, fileName: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    const lowerContent = content.toLowerCase();

    // Check for forbidden keywords
    for (const keyword of this.forbiddenKeywords) {
      if (lowerContent.includes(keyword.toLowerCase())) {
        errors.push(`Forbidden keyword found: "${keyword}" in file ${fileName}`);
      }
    }

    // Check if content contains sufficient conceptual keywords
    let conceptualKeywordCount = 0;
    for (const keyword of this.conceptualKeywords) {
      if (lowerContent.includes(keyword.toLowerCase())) {
        conceptualKeywordCount++;
      }
    }

    if (conceptualKeywordCount < 3) {
      warnings.push(`Content in ${fileName} may lack sufficient conceptual focus. Consider adding more theoretical concepts.`);
    }

    // Check for proper heading structure (H1, H2, H3)
    const headingPattern = /^#+\s+/gm;
    const headings = content.match(headingPattern) || [];

    let hasH1 = false;
    let hasH2 = false;

    for (const heading of headings) {
      if (heading.startsWith('# ') && !heading.startsWith('##')) {
        hasH1 = true;
      } else if (heading.startsWith('## ') && !heading.startsWith('###')) {
        hasH2 = true;
      }
    }

    if (!hasH1) {
      warnings.push(`File ${fileName} should have at least one H1 heading (using #)`);
    }

    if (!hasH2) {
      warnings.push(`File ${fileName} should have at least one H2 heading (using ##)`);
    }

    // Check for code blocks (should be minimal in conceptual content)
    const codeBlockMatches = content.match(/```[\s\S]*?```/g);
    if (codeBlockMatches && codeBlockMatches.length > 2) {
      warnings.push(`File ${fileName} contains ${codeBlockMatches.length} code blocks. Conceptual content should have minimal code examples.`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validates multiple content files
   */
  public static validateMultipleContents(contents: Array<{content: string, fileName: string}>): Array<{fileName: string, result: ValidationResult}> {
    return contents.map(item => ({
      fileName: item.fileName,
      result: this.validateContent(item.content, item.fileName)
    }));
  }

  /**
   * Generates a report of validation results
   */
  public static generateReport(results: Array<{fileName: string, result: ValidationResult}>): string {
    let report = "Content Validation Report\n";
    report += "========================\n\n";

    let errorCount = 0;
    let warningCount = 0;

    for (const result of results) {
      if (!result.result.isValid || result.result.warnings.length > 0) {
        report += `File: ${result.fileName}\n`;

        if (result.result.errors.length > 0) {
          report += "  Errors:\n";
          for (const error of result.result.errors) {
            report += `    - ${error}\n`;
            errorCount++;
          }
        }

        if (result.result.warnings.length > 0) {
          report += "  Warnings:\n";
          for (const warning of result.result.warnings) {
            report += `    - ${warning}\n`;
            warningCount++;
          }
        }

        report += "\n";
      }
    }

    report += `Summary: ${errorCount} errors, ${warningCount} warnings\n`;

    if (errorCount === 0) {
      report += "Status: All content passes validation!\n";
    } else {
      report += "Status: Content requires corrections before approval.\n";
    }

    return report;
  }
}

// Example usage:
/*
const sampleContent = `
# Introduction to Physical AI

This chapter introduces the fundamental concepts of physical AI...

## Core Principles

Physical AI combines robotics and artificial intelligence...
`;

const result = ContentValidator.validateContent(sampleContent, "intro.md");
console.log(result);
*/