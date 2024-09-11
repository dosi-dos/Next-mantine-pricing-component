'use client'
import React, { useState } from 'react';
import { Card, Button, Text, Divider, Container, SimpleGrid, Switch, Stack, Tooltip } from '@mantine/core';
import classes from './PricingSimple.module.css';

const tiers = [
  {
    name: 'Basic',
    monthlyPrice: `$4.99`,
    annualPrice: `$49.99`,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    tooltip: 'Choose Basic Plan for essential features.',
  },
  {
    name: 'Basic +',
    monthlyPrice: `$9.99`,
    annualPrice: `$99.99`,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    tooltip: 'Choose Basic + Plan for additional features.',
  },
  {
    name: 'Basic ++',
    monthlyPrice: `$14.99`,
    annualPrice: `$149.99`,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    tooltip: 'Choose Basic ++ Plan for the most features.',
  },
];

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSwitchChange = (checked: boolean) => setIsAnnual(checked);

  return (
    <Container mt={30} mb={30} size="lg">
      <Stack align="center">
        <Switch
          checked={isAnnual}
          onChange={(event) => handleSwitchChange(event.currentTarget.checked)}
          label={isAnnual ? 'Annual' : 'Monthly'}
        />
        <SimpleGrid cols={3} spacing="lg">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={classes.card}
              padding="lg"
              shadow="sm"
              radius="md"
              withBorder
            >
              <Text className={classes.cardTitle} size="lg">
                {tier.name}
              </Text>
              <Divider my="sm" />
              <Text className={classes.cardPrice} size="xl">
                {isAnnual ? tier.annualPrice : tier.monthlyPrice}
              </Text>
              <ul className={classes.featuresList}>
                {tier.features.map((feature, i) => (
                  <li key={i} className={classes.featureItem}>{feature}</li>
                ))}
              </ul>
              <Tooltip label={tier.tooltip}>
                <Button
                  className={classes.button}
                  variant="outline"
                  color="blue"
                >
                  Choose Plan
                </Button>
              </Tooltip>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
